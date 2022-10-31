import * as React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import Container from '@mui/material/Container';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
