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
            href="https://discord.gg/get-protocol-889431643494944768"
            passHref
          >
            <Button
              color="secondary"
              component="a"
              fullWidth
              sx={{
                backgroundColor: "#637971",
                mt: 2 }}
            variant="contained"
            >
              JOIN THE COMMUNITY ON DISCORD
            </Button>
          </NextLink>
        </Box>
    </footer>
  )
}
