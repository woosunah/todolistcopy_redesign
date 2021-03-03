module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/todolistcopy_redesign/' : '/',
  outputDir: 'docs',
  transpileDependencies: ['vuetify'],
};
