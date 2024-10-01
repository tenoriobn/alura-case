module.exports = {
  // output: 'export',
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/perguntas',
        destination: '/faq/',
        permanent: true,
      },
    ]
  },
};