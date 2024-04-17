import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import Navigation from "./components/Navigation/Navigation";

// const HomePage = lazy(() => import("pages/HomePage"));
// const MoviesPage = lazy(() => import("pages/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage"));

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
