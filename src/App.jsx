import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
// import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieRevies/MovieRevies";

const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieRevies/MovieRevies"));

const App = () => {
  return (
    <div className="div">
      <Navigation />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
