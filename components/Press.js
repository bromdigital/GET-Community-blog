import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Grid,
  CardActionArea,
} from '@mui/material'

export default function TwitterThread({ post }) {
  return (
    <Grid item
      xs={12}
      sm={12}
      md={4}
      lg={3}
    >
      <Card
        sx={{
          backgroundColor: "#E94E1B",
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
              Press
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
