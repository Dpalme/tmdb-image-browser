import { Container } from '@/shared/components/container';
import { SearchField } from '@/shared/components/searchField';
import SearchResultsPage from './resultsPage';

const SearchPage = () => {
  return (
    <Container containerClass='!grid-cols-1 relative'>
      <div className="flex flex-col gap-2 fixed bottom-20 left-1/2 z-10 -translate-x-1/2 transform md:hidden">
        <SearchField />
      </div>
      <SearchResultsPage />
    </Container>
  );
};

export default SearchPage;
