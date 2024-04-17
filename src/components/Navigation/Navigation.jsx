import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/movies">MOVIES</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
