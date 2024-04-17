import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MoviesList from "../../components/MovieList/MoviesList";

const MovieDetailsPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMovie();
        // console.log();
        setMovie(data.results);
      } catch (error) {
        setError(error);
        // console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MoviesList movie={movie} />}
    </div>
  );
};

export default MovieDetailsPage;
