import Loader from "../../components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import MoviesList from "../../components/MovieList/MoviesList";
import { fetchSearchId } from "../../services/api";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Movie from "../../components/Movie/Movie";

const MovieDetailsPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  // const location = useLocation();
  // const goBackLink = useRef(location.state?.from ?? "/movies");
  const params = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/movies");
  const previousHref = useRef(null);
  const backLink = backLinkHref.current;

  const movieId = params.movieId;
  console.log("params", movieId);

  useEffect(() => {
    previousHref.current = backLink;

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
  }, [movieId, backLink]);

  return (
    <div>
      <Link to={backLink.current}>Go Back</Link>
      <Movie movie={movie} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
