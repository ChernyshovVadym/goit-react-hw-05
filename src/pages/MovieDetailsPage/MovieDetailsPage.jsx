import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import MoviesList from "../../components/MovieList/MoviesList";
import { fetchSearchId } from "../../services/api";
import { Outlet, useParams } from "react-router-dom";
import Movie from "../../components/Movie/Movie";

// import { Link } from "react";

const MovieDetailsPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchSearchId(params.movieId);

        console.log(data);
        setMovie(data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [params.movieId]);

  return (
    <div>
      {<Movie movie={movie} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {/* <Link to="cast">Movie Cast</Link>
      <Link to="reviews">Reviews</Link> */}

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
