import {
  SET_QUOTES,
  SET_LOADING,
  SET_ERROR,
  SET_TOTAL_QUOTES,
  ADD_QUOTE,
} from '../actions';

const initialState = {
  quotes: [],
  loading: false,
  error: null,
  totalQuotes: 0,
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_TOTAL_QUOTES:
      return {
        ...state,
        totalQuotes: action.payload,
      };
    case ADD_QUOTE:
      return {
        ...state,
        quotes: [action.payload, ...state.quotes],
        
      };
    default:
      return state;
  }
};

export default quotesReducer;