import { PostPreview } from '../components/postPreview'
import { posts } from '../utils/getAllPosts'
import Head from 'next/head'
import { siteName } from '../components/layout'

const pageName = 'Blog'

export default function Blog() {
  return (
    <div>
      <Head>
        <title>
          {pageName} | {siteName}
        </title>

        <meta property="og:title" content={pageName} key="ogtitle" />
      </Head>
      <h1>Blog</h1>
      <p className="text-xl font-light mb-20">
        Two articles each month starting January 2021. Allegedly.
      </p>

      <section id="blog-list" className="mt-12 mb-32">
        <ul>
          {posts.map((post, i) => (
            <li className="mb-16" key={i}>
              <PostPreview key={post.link} post={post} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
