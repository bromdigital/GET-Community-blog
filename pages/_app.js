import * as React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import Head from 'next/head'
import Container from '@mui/material/Container';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" />
      </Head>
      <Header />
      <Container maxWidth={false}>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}

export default MyApp
