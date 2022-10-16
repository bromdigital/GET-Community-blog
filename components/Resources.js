import * as React from 'react';
import {
  Button,
  Divider,
  Stack
} from '@mui/material';

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
      href: 'https://dashboard.get-community.com/',
      title: 'Community Dashboard'
    }
  ];
  const btnStyle = {
    margin: 1,
    backgroundColor: "#77B094",
    color: "white",
    '&:hover': {
      backgroundColor: '#15083F',
      borderColor: '#15083F',
      boxShadow: 'none',
    },
  }
  return (
    <div>
      {resources.map((item) => (
          <Button
            key={item.href}
            size="large"
            href={item.href}
            target="_blank"
            sx={btnStyle}
          >{item.title}</Button>
          ))}
    </div>
  );
}
