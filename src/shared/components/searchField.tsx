import { useRef } from 'react';
import SearchIcon from '@assets/search.svg';
import { useNavigate } from 'react-router-dom';

export const SearchField = (props: { defaultVisibility?: boolean }) => {
  const queryField = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-2">
      <form
        action={import.meta.env.BASE_URL + 'search'}
        method="GET"
        onSubmit={(ev) => {
          navigate(`/search?query=${queryField.current?.value}`);
          ev.preventDefault();
          setIsVisible(false);
        }}
        className="flex flex-col gap-2"
      >
        <label htmlFor="queryField" className="hidden">
          Search
        </label>
        <div className="relative h-8">
          <input
            type="text"
            name="query"
            id="queryField"
            className="rounded-full px-4 pl-10 text-lg leading-8"
            ref={queryField}
          />
          <img
            src={SearchIcon}
            alt="Collection"
            className="absolute left-2 top-1"
          />
        </div>
      </form>
    </div>
  );
};
