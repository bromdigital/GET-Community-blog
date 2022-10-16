import * as React from 'react';
import NextLink from 'next/link';
import Stack from '@mui/material/Stack';

export default function MainMenu() {

  return (
    <div>
      <Stack direction="row" spacing={2}>
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
      </Stack>
    </div>
  );
}
