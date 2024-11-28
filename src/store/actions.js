// Action Types
export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const LOGOUT = 'LOGOUT';
export const SET_QUOTES = 'SET_QUOTES';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_TOTAL_QUOTES = 'SET_TOTAL_QUOTES';
export const ADD_QUOTE = 'ADD_QUOTE';

// Action Creators
export const setCredentials = (token, username) => ({
  type: SET_CREDENTIALS,
  payload: { token, username },
});

export const logout = () => ({
  type: LOGOUT,
});

export const setQuotes = (quotes) => ({
  type: SET_QUOTES,
  payload: quotes,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const setTotalQuotes = (total) => ({
  type: SET_TOTAL_QUOTES,
  payload: total,
});

export const addQuote = (quote) => ({
  type: ADD_QUOTE,
  payload: quote,
});