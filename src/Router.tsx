import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { lazy } from 'react';

const Homepage = lazy(() => import('@/home/page'));
const MoviePage = lazy(() => import('@/movie/page'));
const CollectionPage = lazy(() => import('@/collection/page'));
const SearchPage = lazy(() => import('@/search/page'));

export const ApplicationRouter = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Homepage />} />
      <Route path="/movie/:movieId" element={<MoviePage />} />
      <Route path="/collection" element={<CollectionPage />} />
      <Route path="/search/*" element={<SearchPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
