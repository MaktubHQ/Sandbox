import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/landing/footer'
import Hero from '../components/landing/hero'
import Navbar from '../components/landing/navbar'
import styles from '../styles/Home.module.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deal by MaktubLabs</title>
        <meta name="description" content="Built by MaktubLabs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Footer />

      
    </div>
  )
}
