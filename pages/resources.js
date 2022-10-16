import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import Grid from '@mui/material/Grid';
import { sortByDate } from '../utils'
import {
  Typography,
  Container,
  Card
} from '@mui/material'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>GET Community Resources</title>
      </Head>
      <Grid container spacing={2}>
        <Container>
            <Typography variant='h5'>
              Page Title
            </Typography>
        </Container>
      </Grid>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
