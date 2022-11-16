import * as React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header>
      </Header>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
