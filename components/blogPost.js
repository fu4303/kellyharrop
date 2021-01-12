import { PostHeader } from './postHeader'
import Link from 'next/link'

export default function BlogPost({ children, meta }) {
  return (
    <>
      <PostHeader meta={meta} isBlogPost />
      <article className="prose dark:prose-dark mb-20">{children}</article>
      <Link href="/blog">
        <a>← All posts</a>
      </Link>
    </>
  )
}
