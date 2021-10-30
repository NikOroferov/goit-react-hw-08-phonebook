import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operation';
import defaultImage from './pngwing.com.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={css.user}>
      <img src={defaultImage} alt="avatar" width="60" />
      <p className={css.hello}>Hello, {name}</p>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className={css.button}
      >
        LogOut
      </button>
    </div>
  );
}
