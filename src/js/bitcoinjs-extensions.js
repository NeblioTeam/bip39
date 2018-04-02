bitcoinjs.bitcoin.networks.neblio = {
  messagePrefix: '\x18Neblio Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x35,
  scriptHash: 0x70,
  wif: 0xb5
};

bitcoinjs.bitcoin.networks.neblio_testnet = {
  messagePrefix: '\x18Neblio Signed Message:\n',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394
  },
  pubKeyHash: 0x41,
  scriptHash: 0x7f,
  wif: 0xb5
};
