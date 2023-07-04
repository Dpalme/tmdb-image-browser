import { Route, Routes } from 'react-router-dom';
import SearchPage from './searchPage';
import SearchResultsPage from './resultsPage';

const SearchRouter = () => {
  return (
    <Routes>
      <Route path="" element={<SearchPage />}>
        <Route path="" element={<SearchResultsPage />} />
      </Route>
    </Routes>
  );
};

export default SearchRouter;
