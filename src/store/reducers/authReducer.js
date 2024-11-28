import { SET_CREDENTIALS, LOGOUT } from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  username: localStorage.getItem('username'),
  isAuthenticated: !!localStorage.getItem('token'),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      const { token, username } = action.payload;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      return {
        ...state,
        token,
        username,
        isAuthenticated: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      return {
        ...state,
        token: null,
        username: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;