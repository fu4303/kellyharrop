function importAll(r) {
  return r.keys().map(fileName => ({
    link: fileName.substr(1).replace(/\.mdx$/, ''),
    module: r(fileName)
  }))
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export const posts = importAll(
  require.context('../pages/blog/', true, /\.mdx$/)
).sort((a, b) => dateSortDesc(a.module.meta.published, b.module.meta.published))
