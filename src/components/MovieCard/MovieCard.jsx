import { Link } from "react-router-dom";

import css from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const url =
    "https://img.freepik.com/premium-photo/cinema-cinema-attributes-cinemas-films-online-viewing-popcorn-and-glasses_99433-1575.jpg";
  return (
    <div className={css.div}>
      <img
        className={css.img}
        src={movie.backdrop_path ? `${baseURL}${movie.backdrop_path}` : url}
        alt={movie.title}
      />
      <Link className={css.link} to={`/movies/${movie.id}`}>
        <h4>{movie.title}</h4>
      </Link>
    </div>
  );
};

export default MovieCard;
