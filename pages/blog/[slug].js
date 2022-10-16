import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import {
  Button,
  Divider,
  Container,
  Typography
} from '@mui/material';

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title} - GET Community</title>
      </Head>
      <Button
        size="small"
        href="/"
      >Go Back
      </Button>
      <Divider />
      <Container maxWidth={false}>
        <Typography
          variant='h2'>
          {title}
        </Typography>
        <Image
          src={cover_image}
          alt="GET Community Blog"
          width={1}
          height={20}
        />
      
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>

      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
