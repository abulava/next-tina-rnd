import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.frontmatter?.title}</title>
        <meta name="description" content={pageProps.frontmatter?.description} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
