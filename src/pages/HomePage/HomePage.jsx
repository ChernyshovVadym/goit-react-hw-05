import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MoviesList from "../../components/MovieList/MoviesList";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchTrendingMovies();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    console.log(movies);
  }, []);
  //    const onLoadMore = () => {
  //     setPage((prevPage) => prevPage + 1);
  //   };

  //  const handleChange = (value) => {
  //     setPage(1);
  //   };

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
