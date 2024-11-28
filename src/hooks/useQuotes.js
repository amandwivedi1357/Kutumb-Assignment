import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  setQuotes,
  setLoading,
  setError,
  setTotalQuotes,
  addQuote,
} from '../store/actions';

export const useQuotes = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);

  const updateQuotes = useCallback((newQuotes) => {
    dispatch(setQuotes(newQuotes));
  }, [dispatch]);

  const updateLoading = useCallback((isLoading) => {
    dispatch(setLoading(isLoading));
  }, [dispatch]);

  const updateError = useCallback((error) => {
    dispatch(setError(error));
  }, [dispatch]);

  const updateTotalQuotes = useCallback((total) => {
    dispatch(setTotalQuotes(total));
  }, [dispatch]);

  const addNewQuote = useCallback((quote) => {
    dispatch(addQuote(quote));
  }, [dispatch]);

  return {
    ...quotes,
    updateQuotes,
    updateLoading,
    updateError,
    updateTotalQuotes,
    addNewQuote,
  };
};
