import * as React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import Container from '@mui/material/Container';
import Resources from '../components/Resources'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Resources />
      <Container maxWidth={false}>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}

export default MyApp
