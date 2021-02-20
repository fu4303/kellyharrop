const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')

const toc = require('@jsdevtools/rehype-toc')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      require('@mapbox/rehype-prism'),

      require('rehype-slug'),
      require('rehype-autolink-headings'),
      [toc, { position: 'afterend', headings: ['h2'] }]
    ]
  }
})

module.exports = withPlugins([
  withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
  }),
  withSvgr
])
