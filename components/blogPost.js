import { PostHeader } from './postHeader'
import Head from 'next/head'
import Link from 'next/link'
import { siteName } from './layout'

export const BlogPost = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>
          {meta.title} | {siteName}
        </title>

        {/* Open Graph */}
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta
          property="og:description"
          content={meta.description}
          key="ogdesc"
        />
      </Head>
      <PostHeader meta={meta} isBlogPost />
      <article className="prose dark:prose-dark mb-20">{children}</article>
      <Link href="/blog">
        <a>← All posts</a>
      </Link>
    </>
  )
}

export default BlogPost
