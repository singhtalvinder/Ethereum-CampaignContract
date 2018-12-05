import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xdb1496E844218bf098c9bE4a03C4c0CfAc35F234'
);

export default instance;