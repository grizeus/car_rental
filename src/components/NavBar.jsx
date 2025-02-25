import { NavLink } from "react-router-dom";

const cssBuilder = ({ isActive }) =>
  ` ${isActive && "text-persian"} text-base font-medium leading-5`;

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <NavLink className={cssBuilder} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={cssBuilder} to="/catalog">
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
