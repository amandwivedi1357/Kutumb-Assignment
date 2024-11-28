import { combineReducers, legacy_createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import quotesReducer from './reducers/quotesReducer';

// Combine all reducers into a rootReducer
const rootReducer = combineReducers({
  auth: authReducer,
  quotes: quotesReducer,
});

// Enable Redux DevTools Extension with middleware
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) // Add thunk middleware
);
