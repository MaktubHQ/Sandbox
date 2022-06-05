import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/landing/footer'
import Hero from '../components/landing/hero'
import Navbar from '../components/landing/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DeJobs by MaktubLabs</title>
        <meta name="description" content="Built by MaktubLabs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Footer />

      
    </div>
  )
}
