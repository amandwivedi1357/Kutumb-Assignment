import { useSelector, useDispatch } from 'react-redux';
import { setCredentials, logout } from '../store/actions';

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const login = (token, username) => {
    dispatch(setCredentials(token, username));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    ...auth,
    login,
    logout: handleLogout,
  };
};