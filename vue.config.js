module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3001',
        ws: true,
        secure: false //localhost is never secure
      }
    }
  }
};
