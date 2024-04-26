import MovieCard from "../MovieCard/MovieCard";

import css from "./MovieList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.ul}>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
