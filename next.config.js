const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      require('rehype-slug'),
      require('rehype-autolink-headings'),
      { behavior: 'append' }
    ]
  }
})

module.exports = withPlugins(
  [
    withMDX({
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
    }),
    withSvgr
  ],
  {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }

      return config
    }
  }
)
