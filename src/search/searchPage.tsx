import { Container } from '@/shared/components/container';
import { SearchField } from '@/shared/components/searchField';
import { Outlet } from 'react-router-dom';

const SearchPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-2">
        <h1 className="text-6xl">Search</h1>
        <SearchField />
      </div>
      <Outlet />
    </Container>
  );
};

export default SearchPage;
