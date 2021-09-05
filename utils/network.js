export default {
  mainnet: {
    pubkey: 0x21,
    pubkeyhash: 0x21,
    scripthash: 0x3A,
    witness_v0_keyhash: 'eqpay',
    witness_v0_scripthash: 'eqpay'
  },
  testnet: {
    pubkey: 0x78,
    pubkeyhash: 0x78,
    scripthash: 0x6e,
    witness_v0_keyhash: 'tq',
    witness_v0_scripthash: 'tq'
  }
}[process.env.network || 'mainnet']
