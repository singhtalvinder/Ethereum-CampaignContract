import Web3 from 'web3';

// Assumption: User has metamask installed and running so that
// we can get current provider.
//const web3 = new Web3(window.web3.currentProvider);
// But thats not the case. Even window as used above will not be
// accessible in server code.
// So: follow the approach below to handle 2-cases.

let web3;
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // means its running in browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
}
else {
    // means its running on server. or user not running metamask.
    // Create own provider.
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/49b0ba1b330d4f7ea92dd55fcb233a32'
    );

    web3 = new Web3(provider);

}
// Web3 -> constructor function.
// web3 -> instance.
export default web3;
