import { PostPreview } from '../components/postPreview'
import { posts } from '../utils/getAllPosts'
import Head from 'next/head'

import { siteName } from '../components/layout'

const pageName = 'Blog'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>
          {pageName} | {siteName}
        </title>

        {/* Open Graph */}
        <meta property="og:title" content={pageName} key="ogtitle" />
      </Head>
      <h1>Blog</h1>
      <p>Two articles each month starting January 2021. Allegedly.</p>
      <section id="blog-list" className="mt-12">
        <ul>
          {posts.map(post => (
            <li className="mb-16">
              <PostPreview key={post.link} post={post} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
