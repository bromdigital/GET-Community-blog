import NextLink from 'next/link';
import {
  Box,
  Button,
  Typography
} from '@mui/material';


export default function Header() {
  return (
    <footer>
      <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
          <NextLink
            href="https://discord.gg/RQCkh5Ve"
            passHref
          >
            <Button
              color="secondary"
              component="a"
              fullWidth
              sx={{ mt: 2 }}
            variant="contained"
            >
              JOIN THE COMMUNITY ON DISCORD
            </Button>
          </NextLink>
        </Box>
    </footer>
  )
}
