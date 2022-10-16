import * as React from 'react';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Image from 'next/image'
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { withTheme } from '@emotion/react';

export default function MainMenu() {

  return (
    <div>
      <Stack direction="row" spacing={2}>
      <NextLink
              href="/"
              passHref
        >
        <Image
          src="/static/images/logo.svg"
          alt="GET Community Blog"
          width={250}
          height={80}
        />
      </NextLink>
      <Link href="#" underline="none">
        Resources
      </Link>
      </Stack>
    </div>
  );
}
