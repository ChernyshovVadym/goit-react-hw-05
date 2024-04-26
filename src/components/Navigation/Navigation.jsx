import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={css.navLink}>
          HOME
        </NavLink>
        <NavLink to="/movies" className={css.navLink}>
          MOVIES
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
