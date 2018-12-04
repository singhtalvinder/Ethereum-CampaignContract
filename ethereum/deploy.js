const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');


// Pass in the mnemonic and the tst newtork we want to connect to !! 
let myMetaMaskString = 'master myself rail great tomato soft soda more present region clap crane';
const provider = new HDWalletProvider(myMetaMaskString,
'https://rinkeby.infura.io/v3/49b0ba1b330d4f7ea92dd55fcb233a32'
);

// Enabled for rinkeby n/w.
const web3 = new Web3(provider);

// Need to make 2 async calls:
// -- 1 to get the list of all accounts we have access to.
// -- 2 to create and deploy the contract.
// since there are 2, we can use a function to use async.
const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account:', accounts[0]);
    console.log(`compiledFactory.interface is ${compiledFactory.interface}`);
    
    // result : Holds the address where the contract got deployed.
    const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface))
    .deploy({data: '0x' + compiledFactory.bytecode})
    .send({ gas: '1000000', from: accounts[0]}); //gas: '1000000',-not neede for provide> 0.6

    console.log('Contract Deployed to :', result.options.address);
    // Note: Contract Deployed to : 0xeA056b2948DC1C240Ce6432Aa0F4F4f688B598Ae
    // this is needed to interface with any html/javascript application.
    // Like loading this in same contract on remix.ethereum.org->Run->'At Address'
    // and passing this address.
};

deploy();