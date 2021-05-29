require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe strike rival night huge idea clog sure gaze'; 
let testAccounts = [
"0xe2b8c7b83ad2dd5e73fd4403ea0e37e16feb29d7578585d3ff1b2945c939566d",
"0x3b13203eae7735cbcfc1fa66e5ddedb4a568ac2aa063adb7af42f8b2fb07cee9",
"0x9cbbdf2280628e20afa894e5a14fa987227f6e9e48fce020ce6674249c3c98ce",
"0x650bd97c4765294f43a6dd89adf7c1851cd5f1dd8447ef5f5ae42fd064a43653",
"0x999fd3b94c50249efe400f34149928a9cbb8f949913ca89973ddeecd10713844",
"0x42d2a002970a069cf445245aca38055ac2404444e6e0f2c9c53bcc009be952a7",
"0x3943308e91f6290ad99cc12c2ad54d50fe79c23f308e7861ca6ef11d9bd9f5bc",
"0x596fee2e971b6cd90b6f3d29380b43b187c54acf4451e57258864c0b457114b0",
"0xde9c9ade0a265c7e51e41e9cae4dc23c2c1fb7fc3c4d2b2c9d7e07af1efaddaf",
"0x500cf8f2e1f3fc6d01944d8d1abff8d01892433502c14ad9e0828aebc7087ecb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

