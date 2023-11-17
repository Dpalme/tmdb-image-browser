import { useRef } from 'react';
import SearchIcon from '@assets/search.svg';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const SearchField = () => {
  const queryField = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  return (
    <div className="flex flex-row gap-2 w-full max-w-3xl md:max-w-lg">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          if (!location.pathname.includes('/search'))
            return navigate(`/search?query=${queryField.current?.value}`);
          setSearchParams(
            { query: queryField.current?.value || '' },
            { replace: true }
          );
        }}
        className="flex flex-col gap-2 w-full"
      >
        <label htmlFor="queryField" className="hidden">
          Search
        </label>
        <div className="relative h-8">
          <input
            type="text"
            name="query"
            id="queryField"
            className="rounded-full px-4 pl-10 text-lg leading-8 border border-gray-300 w-full"
            ref={queryField}
            required={true}
            defaultValue={searchParams.get('query') || ''}
          />
          <img
            src={SearchIcon}
            className="absolute left-2 top-1 pointer-events-none dark:(invert filter)"
            height={24}
          />
        </div>
      </form>
    </div>
  );
};
