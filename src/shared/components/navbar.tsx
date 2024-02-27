import CollectionIcon from '@assets/heart_filled.svg';
import Logo from '@assets/Posterify.svg';
import SearchIcon from '@assets/search.svg';
import { SearchField } from './searchField';
import { Link } from '@tanstack/react-router';
import { ReactNode } from 'react';

const NavLink = (props: { to: string; children: ReactNode; search?: any }) => {
  return (
    <Link
      to={props.to}
      className="font-title text-lg navlink flex
  flex-row gap-2 items-center"
      activeProps={() => ({
        className: 'text-emerald-600',
      })}
      search={props.search}
    >
      {props.children}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav
      className="flex gap-2 fixed px-4 py-4
      bottom-0 right-0 flex-row backdrop-blur-lg
      backdrop-filter w-full z-20 bg-white
      text-black justify-evenly items-center
      md:(justify-start gap-8 top-0 left-0 bottom-auto px-12)
      dark:(bg-dark-700 text-white)"
    >
      <NavLink to="/">
        <img
          src={Logo}
          alt="Posterify Logo"
          className="w-8"
          height={24}
        />
        <span className="hidden md:inline-block">POSTERIFY</span>
      </NavLink>
      <NavLink to="/collection">
        <img
          src={CollectionIcon}
          className="pointer-events-none"
          height={24}
        />
      </NavLink>
      <NavLink to="/search">
        <img
          src={SearchIcon}
          className="pointer-events-none"
          height={24}
        />
      </NavLink>
      <div className="hidden md:(ml-auto block)">
        <SearchField />
      </div>
    </nav>
  );
};

export default Navbar;
