import * as React from 'react';
import {
  Button,
  Grid,
  Typography
} from '@mui/material';
import { Container } from '@mui/system';

export default function DirectionStack() {
  const resources = [
    {
      href: 'https://faq.get-protocol.io/get-faqs/general-faq',
      title: 'FAQs'
    },
    {
      href: 'https://www.get-protocol.io/contact',
      title: 'Contact Form'
    },
    {
      href: 'https://www.get-protocol.io/token',
      title: '$GET Token'
    },
    {
      href: 'https://www.get-protocol.io/content',
      title: 'Stories'
    },
    {
      href: 'https://explorer.get-protocol.io/',
      title: 'NFT Ticket Explorer'
    },
    {
      href: 'https://thegraph.com/hosted-service/subgraph/getprotocol/get-protocol-subgraph',
      title: 'Subgraph'
    },
    {
      href: 'https://dune.com/jackturnbull/GET-Protocol-Token-Dashboard',
      title: 'Dune Analytics'
    },
    {
      href: 'https://twitter.com/GET_comm_dash',
      title: 'Twitter Bot'
    },
    {
      href: 'https://docs.get-protocol.io/',
      title: 'Dev Docs'
    },
    {
      href: 'https://dashboard.get-community.com/',
      title: 'Dashboard'
    }
  ];
  const btnStyle = {
    color: "white",
    width: "100%",
  }
  const gridStyle = {
    textAlign: "center",
    backgroundColor: "#77B094",
    padding: 1
  }
  const resourcesStyle = {
    backgroundColor: "#77B094",
    color: "white",
    padding: 1
  }
  const headerBg = {
    backgroundColor: "#77B094",
    width: "100%"
  }

  return (
    <div>
      <Container
        sx={headerBg}
        maxWidth={false}>
      <Typography gutterBottom
        variant="h7"
        sx={resourcesStyle}
        >
        Resources    
      </Typography>
      </Container> 
      <Grid container
        sx={gridStyle}>
        {resources.map((item) => (
          <Grid item
            key={item.href}
            sm={4}
            lg={2}
            sx={gridStyle}
          >
          <Button
            key={item.href}
            size="large"
            href={item.href}
            target="_blank"
            sx={btnStyle}
            variant="outlined"
            color="success"
            >{item.title}</Button>
          </Grid>
      ))}
      </Grid>
    </div>
  );
}
