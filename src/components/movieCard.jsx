import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
const imageLink='https://image.tmdb.org/t/p/w500';
export default function filmCard(props) {
  const film=props.movie;
  
  return (
    <Card style={{cursor:'pointer'}} sx={{ maxWidth: 345 }}>
      <Image
        
        alt="fast and farious"
        width={345}
        height={550}
        src={imageLink+film.poster_path}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {film.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {film.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        
      </CardActions>
    </Card>
  );
}
