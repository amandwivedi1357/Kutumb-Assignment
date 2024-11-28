import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './store/store';
import Login from './pages/Login';
import QuoteList from './pages/QuoteList';
import CreateQuote from './pages/CreateQuote';
import ProtectedRoute from './components/ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/quotes/*"
            element={
              <ProtectedRoute>
                <QuoteList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreateQuote /> 
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/quotes" replace />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right" />
    </Provider>
  );
}

export default App;