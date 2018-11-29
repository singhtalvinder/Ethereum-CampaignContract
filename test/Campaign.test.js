const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts; // listing of all local ganache n/w accounts.
let factory; // deployed instance of factory.
let campaignAddress;
let campaign;

beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();
    factory  = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({ from: accounts[0], gas: '1000000'});

    await factory.methods.createCampaign('100') // in wei.
    .send({ from: accounts[0],
    gas: '1000000'
    });


    //const addresses = await factory.methods.getDeployedCampaigns().call();// its a view method.
    //campaignAddress = addresses[0];
    // Or better destructuring way. Get the first element from array.
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();// its a view method.

    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress); // address of (in this case already) deployed contract.
});


describe('Campaigns', () =>{
    it('Deploys a factory and a campaign'), () =>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    };

    it('Marks caller as the Manager of the campaign', async ()=>{
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('Allows people to contribute money and mark them as approvers', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        });
        const isContributor =  await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    });
});

