const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      require('rehype-slug'),
      require('rehype-autolink-headings'),
      { behavior: 'wrap' }
    ]
  }
})

const nextConfig = {
  distDir: 'build'
}

module.exports = withPlugins([
  nextConfig,
  withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
  }),
  withSvgr
])
