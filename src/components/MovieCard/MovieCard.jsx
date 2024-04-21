import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <img src={`${baseURL}${movie.backdrop_path}`} alt={movie.title} />
      <Link to={`/movies/${movie.id}`}>
        <h4>{movie.title}</h4>
      </Link>
    </div>
  );
};

export default MovieCard;
