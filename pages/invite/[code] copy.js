import React from 'react'
import Head from 'next/head'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import useRedirectToDiscord from '../../hooks/redirectDiscord';

export default function Invite() {
  const router = useRouter()
  const { code } = router.query
  const { secondsRemaining } = useRedirectToDiscord(`https://discord.gg/get-protocol-${ code }`, 2);

  return (
    <>
      <Head>
        <title>Discord Invite</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name='twitter:site' content='@bromdigital' />
        <meta name="twitter:title" content="GET Protocol Community" />
        <meta
          name="twitter:description"
          content="The NFT ticketing protocol. Discuss, contribute and learn at the Discord."
        />
        <meta
          name="twitter:image"
          content="https://www.get-community.com/static/images/discordInvite.png"
          />
      </Head>
      <Container id="resources" maxWidth={false}>
        <h1>You have been invited to join the GET Protocol Discord</h1>
        <p>
          Redirecting to discord in { secondsRemaining } { secondsRemaining > 1 ? 'seconds' : 'second' }.
        </p>
      </Container>
    </>
  )
}
