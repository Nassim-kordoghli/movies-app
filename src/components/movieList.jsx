import MovieCard from "./movieCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

export default function movieList() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1219052b09269ba09014e42c913cedd0"
    )
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, []);
  return (
    <Container style={{ marginTop: "70px" }}>
      <Grid container spacing={2}>
        {movie.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
