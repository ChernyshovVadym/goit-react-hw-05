import Loader from "../../components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import MoviesList from "../../components/MovieList/MoviesList";
import { fetchSearchId } from "../../services/api";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  // const location = useLocation();
  // const goBackLink = useRef(location.state?.from ?? "/movies");
  const params = useParams();
  // const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/movies");
  const previousHref = useRef(null);
  const backLink = backLinkHref.current;

  const movieId = params.movieId;
  console.log("params", movieId);

  useEffect(() => {
    previousHref.current = backLink;
    console.log(previousHref);
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

  // const goBack = () => {
  //   navigate(-1);
  // };

  return (
    <>
      <div className={css.div}>
        <Link to={backLinkHref.current} className={css.link}>
          Go back
        </Link>
        {/* Use a button for the action */}
        {/* <Link to={backLink.current}>Go Back</Link> */}
        <Movie movie={movie} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        <div className={css.divLink}>
          <Link to="cast" className={css.link}>
            Cast
          </Link>
          <Link to="reviews" className={css.link}>
            Reviews
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
