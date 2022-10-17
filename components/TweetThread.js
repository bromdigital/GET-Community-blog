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

export default function TwitterThread({ post }) {
  return (
    <Grid item
      xs={12}
      sm={6}
      lg={4}
    >
      <Card
        sx={{
          backgroundColor: "#4A99E9",
          height: "100%"
        }}>
      <CardActionArea
            LinkComponent="a"
          href={post.frontmatter.url}
          target="_blank"
          sx={{
            height: "100%"
          }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div"
            sx={{
              color: "#FFF",
              fontWeight: "bold"
            }}>
              Twitter Thread
            </Typography>
            <Typography gutterBottom variant="h6" component="div"
            sx={{
              color: "#FFF"
            }}>
              {post.frontmatter.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div"
            sx={{
              color: "#FFF"
            }}>
              - {post.frontmatter.postedBy}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
