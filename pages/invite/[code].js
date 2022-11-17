import React from 'react'
import Head from 'next/head'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

const Invite = () => {
  const router = useRouter()  
  const [discordCode, setDiscordCode] = useState(router.query.code);
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const [redirectTo, setRedirectTo] = useState(`https://discord.gg/get-protocol-${ discordCode }`);

  useEffect(() => {
    setDiscordCode(router.query.code)
    setRedirectTo(`https://discord.gg/get-protocol-${ discordCode }`)

    if (secondsRemaining === 0) {
      router.push(redirectTo);
      clearInterval(timer);
    } 

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1);
      if (secondsRemaining === 1) router.push(redirectTo);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [router, secondsRemaining, redirectTo, discordCode]);

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
          content="https://miro.medium.com/max/1400/1*PBTkc1zZ6m3Aj4Sxb4c7Vg.gif"
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

export default Invite