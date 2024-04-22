import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import Navigation from "./components/Navigation/Navigation";
import MovieCast from "./components/MovieCast/MovieCast";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Suspense } from "react";
import MovieReviews from "./components/MovieRevies/MovieRevies";

// const HomePage = lazy(() => import("pages/HomePage"));
// const MoviesPage = lazy(() => import("pages/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage"));

const App = () => {
  return (
    <div>
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
