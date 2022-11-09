import * as React from 'react';
import NextLink from 'next/link';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material'

export default function MainMenu() {
  const btnStyle = {
    color: "white",
    backgroundColor: "#7DA1A3",
    width: "250px",
    margin: 2
  }
  return (
    <div>
      <NextLink
          href="/"
          passHref
        >
        <img 
          src="/static/images/logo.svg"
          alt="GET Community Blog"
          width={250}
          height={80}
        />
        </NextLink>
              
    </div>
  );
}
