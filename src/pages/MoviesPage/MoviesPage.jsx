import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchSearchMovie } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MoviesList from "../../components/MovieList/MoviesList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const MoviesPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchSearchMovie(query, page);
        // console.log();
        setMovies(data.results);
      } catch (error) {
        setError(error);
        // console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query, page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onSeacrh = (value) => {
    setQuery(value);
    setVisible(true);
  };

  return (
    <div>
      <SearchBar onSubmit={onSeacrh} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isVisible && !loading && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
};

export default MoviesPage;
