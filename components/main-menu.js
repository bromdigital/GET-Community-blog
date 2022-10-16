import * as React from 'react';
import Button from '@mui/material/Button';
import Logo from './logo'
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function BasicMenu() {

  return (
    <div>
      <Stack direction="row" spacing={2}>
      <Logo />
      <Link href="#" underline="none">
        {''}
      </Link>
      </Stack>
    </div>
  );
}
