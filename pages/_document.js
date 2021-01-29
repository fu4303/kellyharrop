import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://www.unpkg.com/prism-themes@1.5.0/themes/prism-coldark-cold.css"
          />
          <link
            rel="stylesheet"
            href="https://www.unpkg.com/prism-themes@1.5.0/themes/prism-coldark-dark.css"
            media="(prefers-color-scheme: dark)"
          />
        </Head>
        <body className="font-sans bg-light-100 text-gray-900 dark:bg-dark-100 dark:text-gray-200">
          <script src="../utils/attach-dark-mode.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
