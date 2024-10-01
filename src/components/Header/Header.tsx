import { NavLink } from "react-router-dom";
import HeaderStyles from "./Header.module.css";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

export const Header = () => {

  const linkClass = ({ isActive }) => (isActive ? HeaderStyles.active : '');

  return (
    <header>
      <div className={HeaderStyles.logo}>
        <span>KnowJob</span><FaMagnifyingGlassChart />
      </div>

      <nav>
        <NavLink to='/' className={ linkClass }>Home</NavLink>
        <NavLink to='/reviews' className={ linkClass }>Reviews</NavLink>
        <NavLink to='/posts' className={ linkClass }>Posts</NavLink>
        <NavLink to='/login' className={ linkClass }>Log in</NavLink>
        <NavLink to='/signup' className={ linkClass }>Sign up</NavLink>
      </nav>
    </header>
  );

}