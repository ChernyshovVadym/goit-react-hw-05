import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MoviesList from "../../components/MovieList/MoviesList";
import Loader from "../../components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchTrendingMovies(page);
        setVisible(page < data.total_pages);
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
    // console.log(movies);
  }, [page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  //  const handleChange = () => {
  //     setPage(1);
  //   };

  return (
    <div>
      <Toaster />
      {error && <ErrorMessage />}
      <MoviesList movies={movies} />
      {isVisible && <LoadMoreBtn onLoadMore={onLoadMore} />}

      {loading && <Loader />}
    </div>
  );
};

export default HomePage;
