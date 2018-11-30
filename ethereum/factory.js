import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x2bD388f23eAe99DDff34725F8014a5f4e0EC1DAB'
);

export default instance;