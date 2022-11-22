module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.0.1',
      skipMD5: true
    },
    autoStart: false,
    instance: {}
  },
  mongoURLEnvName: 'MONGO_TEST_URI'
}
