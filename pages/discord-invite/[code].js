import Head from 'next/head'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { code } = router.query

  return (
    <>
      <Head>
        <title>Discord Invite</title>
        <meta property="og:title" content="Join GET Protocol on Discord." />
        <meta property="og:description" content="The NFT ticketing protocol. Discuss, contribute and learn at the Discord." />
        <meta property="og:image" content="https://www.get-community.com/static/images/og.png" />
      </Head>
      <Container id="resources" maxWidth={false}>
        <h1>Discord Invite code: { code }</h1>
      </Container>
    </>
  )
}
