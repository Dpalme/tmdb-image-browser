import { NavLink } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';

export const Navbar = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <m.nav
      className="flex gap-2 md:gap-8 fixed
      pl-12 py-4 md:px-4 bottom-0 md:top-0
      md:bottom-auto right-0 md:left-0
      flex-col md:flex-row backdrop-blur-lg backdrop-filter
      w-full z-20 bg-black bg-opacity-10"
      initial={{ y: shouldReduceMotion ? 0 : '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <NavLink to="/" className="font-title text-sm font-extrabold navlink">
        POSTERIFY
      </NavLink>
      <div className="flex gap-6 md:gap-4">
        <NavLink
          to="/search"
          className="font-title lowercase md:text-base text-xl drop-shadow-lg navlink"
        >
          search
        </NavLink>
        <NavLink
          to="/collection"
          className="font-title lowercase md:text-base text-xl drop-shadow-lg navlink"
        >
          collection
        </NavLink>
      </div>
    </m.nav>
  );
};

export default Navbar;
