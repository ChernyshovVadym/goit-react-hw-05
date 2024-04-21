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
  const movieId = params.movieId;
  console.log("params", movieId);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchSearchId(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     try {
  //       setError(false);
  //       setLoading(true);
  //       const data = await fetchSearchId(movieId);

  //       console.log("data", data);
  //       setMovie(data);
  //     } catch (error) {
  //       setError(error);
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchMovie();
  // }, [movieId]);

  return (
    <div>
      <Movie movie={movie} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {/* <Link to="cast">Movie Cast</Link>
      <Link to="reviews">Reviews</Link> */}

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
