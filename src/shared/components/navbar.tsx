import { NavLink } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import CollectionIcon from '@assets/folder.svg';
import { SearchField } from './searchField';

export const Navbar = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <m.nav
      className="flex gap-2 md:gap-8 fixed
      pl-12 py-4 md:px-4 bottom-0 md:top-0
      md:bottom-auto right-0 md:left-0
      flex-col md:flex-row backdrop-blur-lg backdrop-filter
      w-full z-20 dark:(bg-black text-white) bg-white text-black"
      initial={{ y: shouldReduceMotion ? 0 : '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <NavLink to="/" className="font-title text-lg navlink">
        POSTERIFY
      </NavLink>
      <div className="flex gap-6 md:gap-4 items-center">
        <NavLink
          to="/collection"
          className="lowercase md:text-base text-xl drop-shadow-lg navlink"
        >
          <img src={CollectionIcon} alt="Collection" />
        </NavLink>
        <SearchField />
      </div>
    </m.nav>
  );
};

export default Navbar;
