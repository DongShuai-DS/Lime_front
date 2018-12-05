module.exports = {
  pwa: {
    name: 'lime',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/sw.js',
    },
  },
};
