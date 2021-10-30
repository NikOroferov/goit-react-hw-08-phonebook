import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <nav>
      <NavLink
        exact
        to="/register"
        className={css.link}
        activeClassName={css.aciveLink}
      >
        Registration
      </NavLink>
      <NavLink
        exact
        to="/login"
        className={css.link}
        activeClassName={css.aciveLink}
      >
        LogIn
      </NavLink>
    </nav>
  );
}
