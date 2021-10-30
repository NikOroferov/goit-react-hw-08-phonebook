import css from './Views.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operation';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>LogIn</h2>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={css.form}
      >
        <label className={css.label}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            className={css.input}
          />
        </label>
        <label className={css.label}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            className={css.input}
          />
        </label>

        <button type="submit" className={css.submitBtn}>
          Login
        </button>
      </form>
    </div>
  );
}
