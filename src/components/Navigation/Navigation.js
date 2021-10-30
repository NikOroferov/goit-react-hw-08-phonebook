import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink
        exact
        to="/"
        className={css.link}
        activeClassName={css.aciveLink}
      >
        HomePage
      </NavLink>

      {isLoggedIn && (
        <NavLink
          exact
          to="/contacts"
          className={css.link}
          activeClassName={css.aciveLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
