import React from 'react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import DarkModeIcon from '../public/icons/dark.svg'
import LightModeIcon from '../public/icons/light.svg'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/layout.module.css'

export const pageTitle = 'Kelly Harrop, UX Engineer'
export const description = 'The personal site and blog of Kelly Harrop'
export const siteName = 'Kelly Harrop, UX Engineer'
export const previewImage =
  'https://user-images.githubusercontent.com/24794756/104333414-d2105980-54b6-11eb-8f15-dffb2b3db93f.png'
export const twitterHandle = '@kellycodeschaos'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />

        {/* Twitter */}
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="twcard"
        />
        <meta
          property="twitter:creator"
          content={twitterHandle}
          key="twhandle"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta content="1200" property="og:image:width" />
        <meta content="628" property="og:image:height" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <header
        className={`${styles.header} border-b border-gray-200 dark:border-gray-800 md:dark:bg-dark-100`}
      >
        <div className="content-wrapper">
          <nav className={styles.nav}>
            <ul className={styles.group}>
              <li>
                <Link href="/">
                  <a
                    className={`${styles.logo} md:text-base text-xl font-semibold text-gray-800 dark:text-white hover:no-underline`}
                  >
                    Kelly Harrop
                  </a>
                </Link>
              </li>

              <li className={router.pathname == '/blog' ? 'active' : ''}>
                <Link href="/blog">
                  <a className="md:text-sm text-gray-800 opacity-80 dark:text-white hover:no-underline hover:opacity-100 transition duration-100">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.group}>
            <ul>
              <li>
                {isMounted && (
                  <button
                    className="p-3 text-center transition rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                    onClick={switchTheme}
                    title={`Activate ${
                      theme === 'light' ? 'dark' : 'light'
                    } mode`}
                    aria-label={`Activate ${
                      theme === 'light' ? 'dark' : 'light'
                    } mode`}
                  >
                    {theme === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="layout mt-28 content-wrapper">
        <main>{children}</main>
      </div>
    </div>
  )
}
