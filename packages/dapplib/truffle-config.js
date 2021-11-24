require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain unfold gloom arena orange gauge'; 
let testAccounts = [
"0xecc8f291a5dfbb5c0eb2acc4cf95c2dec76875ab043a83e6914b5ff479d301db",
"0x7ab56cd087c4c619fd19eaad28f23e69df7fdedfce93869e388bfab199b11754",
"0x72dd32fe0781532109ea7185a122b91baf3fcea73df9447e8e1e1bd7d0e2bc35",
"0xcfc2dee68015ea75782182314ade8c1ad550d762752e6022519d522dc7d4061a",
"0x481ecf1262c77a726db5c611dbc9bb2372112fd34adec0da53dc722006902689",
"0x0bb9c6255b1206642c164c1f56fffbdd0e021e33d21816b4b09b0557f4984d29",
"0x1931117388593298e2ccf92918f246bf8c199c49d36bf0177a80cca2d23f1bc2",
"0x5a1c7da699b69f55ba2e764b7527e35b20af01a8091d3eea910da20ad850b18a",
"0xa7cd9ae3295ff9851983b117994a132bff07e48bb538ec345aa866c916f30fce",
"0xf3690182b39b7c3137e3bd0cfaf89ac7dbcb5889b7f0d348efd044c8f81f10aa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


