import * as React from 'react';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Head from 'next/head'

import {
  Button,
  Divider,
  Container
} from '@mui/material';

export default function PostPage({
  frontmatter: { title, originalUrl, postedBy },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title} - GET Community</title>
      </Head>
      <h2>{`${title} - ${postedBy}`}</h2>
      <Divider />
      <Button
        size="large"
        href="/"
        sx={{margin: 1}}
      >HOME
      </Button>
      <Button
        size="large"
        href={originalUrl}
        sx={{
          margin: 1,
          float: 'right'
        }}
        target="_blank"
      >{`${postedBy}'s original article`}
      </Button>
      <Divider />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}
          id="blogContent"></div>
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
