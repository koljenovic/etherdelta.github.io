/* eslint-env browser */

module.exports = {
  homeURL: 'https://etherdelta.github.io',
  contractEtherDelta: 'smart_contract/etherdelta.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractEtherDeltaAddrs: [
    { addr: '0x8d12a197cb00d4747a1fe03395095ce2a5cc6819', info: 'Deployed 02/09/2017' },
    { addr: '0x373c55c277b866a69dc047cad488154ab9759466', info: 'Deployed 10/24/2016 -- please withdraw' },
    { addr: '0x4aea7cf559f67cedcad07e12ae6bc00f07e8cf65', info: 'Deployed 08/30/2016 -- please withdraw' },
    { addr: '0x2136bbba2edca21afdddee838fff19ea70d10f03', info: 'Deployed 08/03/2016 -- please withdraw' },
    { addr: '0xc6b330df38d6ef288c953f1f2835723531073ce2', info: 'Deployed 07/08/2016 -- please withdraw' },
  ],
  ethTestnet: false,
  ethProvider: 'http://localhost:8545',
  ethGasPrice: 4000000000,
  ethAddr: '0x0000000000000000000000000000000000000000',
  ethAddrPrivateKey: '',
  gasApprove: 250000,
  gasDeposit: 250000,
  gasWithdraw: 250000,
  gasTrade: 250000,
  gasOrder: 250000,
  ordersOnchain: false,
  apiServer: 'https://api.etherdelta.com',
  userCookie: 'EtherDelta',
  eventsCacheCookie: 'EtherDelta_eventsCache',
  deadOrdersCacheCookie: 'EtherDelta_deadOrdersCache',
  ordersCacheCookie: 'EtherDelta_ordersCache',
  etherscanAPIKey: 'GCGR1C9I17TYIRNYUDDEIJH1K5BRPH4UDE',
  tokens: [
    { addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18 },
    { addr: '0xd8912c10681d8b21fd3742244f44658dba12264e', name: 'PLU', decimals: 18 },
    { addr: '0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7', name: '1ST', decimals: 18 },
    { addr: '0x936f78b9852d12f5cb93177c1f84fb8513d06263', name: 'GNTW', decimals: 18 },
    { addr: '0x01afc37f4f85babc47c0e2d0eababc7fb49793c8', name: 'GNTM', decimals: 18 },
    { addr: '0xa74476443119a942de498590fe1f2454d7d4ac0d', name: 'GNT', decimals: 18 },
    { addr: '0x5c543e7ae0a1104f78406c340e9c64fd9fce5170', name: 'VSL', decimals: 18 },
    { addr: '0xac709fcb44a43c35f0da4e3163b117a17f3770f5', name: 'ARC', decimals: 18 },
    { addr: '0x14f37b574242d366558db61f3335289a5035c506', name: 'HKG', decimals: 3 },
    { addr: '0x888666ca69e0f178ded6d75b5726cee99a87d698', name: 'ICN', decimals: 18 },
    { addr: '0x48c80f1f4d53d5951e5d5438b54cba84f29f32a5', name: 'REP', decimals: 18 },
    { addr: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009', name: 'SNGLS', decimals: 0 },
    { addr: '0x4df812f6064def1e5e029f1ca858777cc98d2d81', name: 'XAUR', decimals: 8 },
    { addr: '0xc66ea802717bfb9833400264dd12c2bceaa34a6d', name: 'MKR', decimals: 18 },
    { addr: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a', name: 'DGD', decimals: 9 },
    { addr: '0xce3d9c3f3d302436d12f18eca97a3b00e97be7cd', name: 'EPOSY', decimals: 18 },
    { addr: '0x289fe11c6f46e28f9f1cfc72119aee92c1da50d0', name: 'EPOSN', decimals: 18 },
    { addr: '0xbb9bc244d798123fde783fcc1c72d3bb8c189413', name: 'DAO', decimals: 16 },
    { addr: '0x55e7c4a77821d5c50b4570b08f9f92896a25e012', name: 'P+', decimals: 0 },
    { addr: '0x45e42d659d9f9466cd5df622506033145a9b89bc', name: 'NXC', decimals: 3 },
    { addr: '0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6', name: 'DCN', decimals: 0 },
    { addr: '0x01a7018e6d1fde8a68d12f59b6532fb523b6259d', name: 'USD.DC', decimals: 8 },
    { addr: '0xffad42d96e43df36652c8eaf61a7e6dba2ad0e41', name: 'BTC.DC', decimals: 8 },
    // { addr: '0x949bed886c739f1a3273629b3320db0c5024c719', name: 'AMIS', decimals: 9 },
    { addr: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607', name: 'SWT', decimals: 18 },
    // { addr: '0xf77089f2f00fca83501705b711cbb10a0de77628', name: 'BME', decimals: 0 },
    { addr: '0xb802b24e0637c2b87d2e8b7784c055bbe921011a', name: 'EMV', decimals: 2 },
    { addr: '0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53', name: 'TIME', decimals: 8 },
    // { addr: '0x059d4329078dcA62c521779c0Ce98EB9329349e6', name: 'TIG', decimals: 18 },
    { addr: '0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1', name: 'MLN', decimals: 18 },
    { addr: '0x168296bb09e24a88805cb9c33356536b980d3fc5', name: 'RHOC', decimals: 8 },
    { addr: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c', name: 'EDG', decimals: 0 },
    { addr: '0xf7b098298f7c69fc14610bf71d5e02c60792894c', name: 'GUP', decimals: 3 },
    { addr: '0x807b9487aaf00629b674bd6d02e4917453bc5939', name: 'ETB-OLD', decimals: 12 },
    { addr: '0x4fe6ea636abe664e0268af373a10ca3621a0b95b', name: 'ETB', decimals: 12 },
    { addr: '0x607f4c5bb672230e8672085532f7e901544a7375', name: 'RLC', decimals: 9 },
    { addr: '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b', name: 'TRST', decimals: 6 },
    { addr: '0x2e071d2966aa7d8decb1005885ba1977d6038a65', name: 'DICE', decimals: 16 },
    { addr: '0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c', name: 'TAAS', decimals: 6 },
    { addr: '0x6810e776880c02933d47db1b9fc05908e5386b96', name: 'GNO', decimals: 18 },
    { addr: '0x667088b212ce3d06a1b553a7221e1fd19000d9af', name: 'WINGS', decimals: 18 },
    { addr: '0xfa05a73ffe78ef8f1a739473e462c54bae6567d9', name: 'LUN', decimals: 18 },
    { addr: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a', name: 'TKN', decimals: 8 },
    { addr: '0xcbcc0f036ed4788f63fc0fee32873d6a7487b908', name: 'HMQ', decimals: 8 },
    { addr: '0x960b236a07cf122663c4303350609a66a7b288c0', name: 'ANT', decimals: 18 },
    { addr: '0xd248b0d48e44aaf9c49aea0312be7e13a6dc1468', name: 'SGT', decimals: 1 },
    // MNE is not ERC-20 compliant (no approve and transferFrom):
    // { addr: '0x1a95b271b0535d15fa49932daba31ba612b52946', name: 'MNE', decimals: 8 },
    { addr: '0xff3519eeeea3e76f1f699ccce5e23ee0bdda41ac', name: 'BCAP', decimals: 0 },
    { addr: '0x0d8775f648430679a709e98d2b0cb6250d2887ef', name: 'BAT', decimals: 18 },
    { addr: '0xa645264c5603e96c3b0b078cdab68733794b0a71', name: 'MYST', decimals: 8 },
    { addr: '0x82665764ea0b58157e1e5e9bab32f68c76ec0cdf', name: 'VSM', decimals: 0 },
    { addr: '0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e', name: 'CFI', decimals: 18 },
    { addr: '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374', name: 'VERI', decimals: 18 },
    { addr: '0x40395044ac3c0c57051906da938b54bd6557f212', name: 'MGO', decimals: 8 },
    { addr: '0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06', name: 'PTOY', decimals: 8 },
    { addr: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c', name: 'BNT', decimals: 18 },
    { addr: '0x697beac28B09E122C4332D163985e8a73121b97F', name: 'QRL', decimals: 8 },
    { addr: '0xae616e72d3d89e847f74e8ace41ca68bbf56af79', name: 'GOOD', decimals: 6 },
    { addr: '0x744d70fdbe2ba4cf95131626614a1763df805b9e', name: 'SNT', decimals: 18 },
    // { addr: '0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63', name: 'SONM', decimals: 18 }, // not verified on Etherscan yet...
    { addr: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671', name: 'NMR', decimals: 18 },
    { addr: '0x93e682107d1e9defb0b5ee701c71707a4b2e46bc', name: 'MCAP', decimals: 8 },
    { addr: '0xb97048628db6b661d4c2aa833e95dbe1a905b280', name: 'PAY', decimals: 18 },
  ],
  defaultPair: { token: 'PLU', base: 'ETH' },
  pairs: [
    { token: 'PLU', base: 'ETH' },
    { token: '1ST', base: 'ETH' },
    { token: 'EDG', base: 'ETH' },
    { token: 'ARC', base: 'ETH' },
    { token: 'GNTW', base: 'ETH' },
    { token: 'GNTM', base: 'ETH' },
    { token: 'NXC', base: 'ETH' },
    { token: 'ICN', base: 'ETH' },
    { token: 'REP', base: 'ETH' },
    { token: 'MLN', base: 'ETH' },
    { token: 'SNGLS', base: 'ETH' },
    { token: 'MKR', base: 'ETH' },
    { token: 'DGD', base: 'ETH' },
    { token: 'SWT', base: 'ETH' },
    { token: 'VSL', base: 'ETH' },
    { token: 'HKG', base: 'ETH' },
    { token: 'XAUR', base: 'ETH' },
    { token: 'TIME', base: 'ETH' },
    { token: 'GUP', base: 'ETH' },
    { token: 'RLC', base: 'ETH' },
    { token: 'ETB', base: 'ETH' },
    { token: 'ETB-OLD', base: 'ETH' },
    { token: 'TRST', base: 'ETH' },
    { token: 'DICE', base: 'ETH' },
    { token: 'TAAS', base: 'ETH' },
    { token: 'GNO', base: 'ETH' },
    { token: 'WINGS', base: 'ETH' },
    { token: 'LUN', base: 'ETH' },
    { token: 'TKN', base: 'ETH' },
    { token: 'HMQ', base: 'ETH' },
    { token: 'ANT', base: 'ETH' },
    { token: 'BCAP', base: 'ETH' },
    { token: 'BAT', base: 'ETH' },
    { token: 'MYST', base: 'ETH' },
    { token: 'VSM', base: 'ETH' },
    { token: 'CFI', base: 'ETH' },
    { token: 'VERI', base: 'ETH' },
    { token: 'MGO', base: 'ETH' },
    { token: 'PTOY', base: 'ETH' },
    { token: 'BNT', base: 'ETH' },
    { token: 'QRL', base: 'ETH' },
    { token: 'GOOD', base: 'ETH' },
    { token: 'SNT', base: 'ETH' },
    // { token: 'SONM', base: 'ETH' },
    { token: 'NMR', base: 'ETH' },
    { token: 'MCAP', base: 'ETH' },
    { token: 'PAY', base: 'ETH' },
    { token: 'ETH', base: 'USD.DC' },
    { token: 'ETH', base: 'BTC.DC' },
  ],
};
