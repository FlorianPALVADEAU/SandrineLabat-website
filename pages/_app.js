import Head from 'next/head';
import '@/styles/style.scss'
import '@/styles/burger.css'
// import '@/styles/Timeline.css'
import '@/styles/Animaux.scss'
import Layout from '@/components/layouts'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="author" content="Sandrine LABAT"/>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
