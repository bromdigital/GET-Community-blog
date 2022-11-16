import * as React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import SEO from '../components/seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header>
        <SEO />
      </Header>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
