const MovieCard = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <img src={`${baseURL}${movie.backdrop_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
