import '@/styles/style.scss'
import '@/styles/burger.css'
// import '@/styles/Timeline.css'
import '@/styles/Animaux.scss'
import Layout from '../components/layouts'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
