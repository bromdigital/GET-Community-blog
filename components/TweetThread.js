import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'

export default function TwitterThread({ post }) {
  return (
    <Grid item
      xs={12}
      sm={6}
      lg={4}
    >
    <Card sx={{border: "5px solid #4A99E9"}}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {`Tweet - ${post.frontmatter.title}`}
        </Typography>
      </CardContent>
      <CardActions>
          <Button
            size="small"
            href={post.frontmatter.url}
            target="_blank"
          >View Tweet</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}
