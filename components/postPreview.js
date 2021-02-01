import Link from 'next/link'

export const PostPreview = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post

  return (
    <Link href={'/blog' + link}>
      <a className="post-preview grid gap-x-4 grid-flow-col">
        <div className="content">
          <h2>{meta.title}</h2>
          <div className="description prose dark:prose-dark">
            {meta.description}
          </div>

          <div className="notes">
            <span>{meta.date}</span> • <span>{meta.readTime} min read</span>{' '}
          </div>
        </div>
      </a>
    </Link>
  )
}
