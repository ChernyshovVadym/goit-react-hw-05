import { useEffect, useState } from "react";
import { fetchReviewsById } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
// import Reviews from "../Reviews/Reviews";
import ReviewsList from "../ReviewsList/ReviewsList";

import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchReviewsById(params.movieId);

        // console.log(data);
        setReviews(data.results);
      } catch (error) {
        setError(error);
        // console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // console.log(movies);
  }, [params.movieId]);
  return (
    <div className={css.div}>
      <ReviewsList reviews={reviews} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </div>
  );
};

export default MovieReviews;
