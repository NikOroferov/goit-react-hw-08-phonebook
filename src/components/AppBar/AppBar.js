import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/Navigation/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import authSelectors from 'redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
