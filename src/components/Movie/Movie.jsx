const Movie = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  console.log("movie", movie);
  return (
    <div>
      <img src={`${baseURL}${movie.backdrop_path}`} alt={movie.title} />

      <h4>{movie.tite}</h4>
      <p>{movie.overview}</p>
      <p>User Score: {movie.vote_average}</p>

      <p>Genres:</p>
      {movie.genres && (
        <p>
          {movie.genres.map((gener) => (
            <p key={gener.id}>{gener.name}</p>
          ))}
        </p>
      )}
    </div>
  );
};

export default Movie;
