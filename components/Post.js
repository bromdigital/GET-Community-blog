import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Grid,
  CardActionArea,
  CardMedia
} from '@mui/material'


export default function Post({ post }) {
  return (
    <Grid item
      xs={12}
      sm={6}
      lg={4}
    >
      <Card>
        <CardActionArea
          LinkComponent="a"
          href={`/blog/${post.slug}`}
        >
        <CardMedia
          component="img"
          height="140"
          image={post.frontmatter.featureImage}
          alt={post.frontmatter.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.frontmatter.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {post.frontmatter.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  );
}
