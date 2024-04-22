import { useEffect, useState } from "react";
import { fetchCastById } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import CastList from "../CastList/CastList";

const MovieCast = () => {
  const [casts, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchCastById(params.movieId);

        console.log(data);
        setCast(data.cast);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // console.log(movies);
  }, [params.movieId]);
  return (
    <div>
      <CastList casts={casts} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </div>
  );
};

export default MovieCast;
