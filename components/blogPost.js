import { PostHeader } from './postHeader'
import Head from 'next/head'
import Link from 'next/link'
import { siteName } from './layout'
import 'prism-themes/themes/prism-coldark-dark.css'

export const BlogPost = ({ children, meta }) => {
  return (
    <div className="article-wrapper">
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
        <meta property="og:image" content={meta.previewImage} key="ogimage" />
      </Head>
      <PostHeader meta={meta} isBlogPost />
      <article className="prose dark:prose-dark mb-32">{children}</article>
      <Link href="/blog">
        <a className="block mb-10">← All posts</a>
      </Link>
    </div>
  )
}

export default BlogPost
