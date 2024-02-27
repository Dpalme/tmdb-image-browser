import { useRef } from 'react';
import SearchIcon from '@assets/search.svg';
import { useNavigate, useSearch } from '@tanstack/react-router';

export const SearchField = () => {
  const queryField = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-2 w-full max-w-3xl md:max-w-lg">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          navigate({
            to: '/search',
            search: { query: queryField.current?.value || '' },
          });
        }}
        className="flex flex-col gap-2 w-full"
      >
        <label
          htmlFor="queryField"
          className="hidden"
        >
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
