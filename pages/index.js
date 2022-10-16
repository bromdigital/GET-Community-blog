import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import Grid from '@mui/material/Grid';
import { sortByDate } from '../utils'
import { Container } from '@mui/system'
import Resources from '../components/Resources'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>GET Community Blog</title>
      </Head>
      <Container id="resources" maxWidth={false}>
        <h3>Resources</h3>
        <Resources />
      </Container>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
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
