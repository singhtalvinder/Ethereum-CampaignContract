
// Compile it one time only instead of each time the contracts is accessed.
// So save the output of both the compiled contract into seperate files.

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);

// read the campaign sol file .
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
console.log(campaignPath);
const source = fs.readFileSync(campaignPath, 'utf-8');
const output = solc.compile(source, 1).contracts;

// write the output to 2-files : one for factory, one for campaign.
fs.ensureDirSync(buildPath);
for(let contract in output) {
    // the name comes with a : prefixed so need to remove that.
    contract1 = contract.substr(1, contract.length-1);
    //console.log(contract);
    fs.outputJSONSync(
        path.resolve(buildPath, contract1 + '.json'),
        output[contract]);
}
