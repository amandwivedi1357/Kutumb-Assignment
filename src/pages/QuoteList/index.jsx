import  { useEffect, useState } from 'react';
import QuoteGrid from './QuoteGrid';
import { getQuotes } from '../../services/api';
import { useQuotes } from '../../hooks/useQuotes';
import Pagination from './Pagination';

import { useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';

const QuoteList = () => {
  const {
    quotes,
    loading,
    error,
    updateQuotes,
    updateLoading,
    updateError,
    
  } = useQuotes();

  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 10;
  const totalQ = useSelector((state) => state.quotes);
const goToLastPage = async()=>{
  console.log('Total Quotes', totalQ.totalQuotes-10) 
  const response = await getQuotes(quotesPerPage,totalQ.totalQuotes-10);
  setCurrentPage(40)
  updateQuotes(response);


}

  useEffect(() => {
    const fetchQuotes = async () => {
      updateLoading(true);
      try {
      
     
        const response = await getQuotes(quotesPerPage, (currentPage + 1) * quotesPerPage);
        console.log(response.length)
        updateQuotes(response);

        
      } catch (err) {
        updateError('Failed to fetch quotes.');
      } finally {
        updateLoading(false);
      }
    };
if(currentPage!==40){
  fetchQuotes();
}
else{
  if(totalQ.totalQuotes==0){
    fetchQuotes();
  }
  else if(totalQ.totalQuotes!==0){
    goToLastPage()
  }
}
  }, [currentPage,updateError,updateLoading,updateQuotes]);
  

  const totalPages = 40;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-md" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <QuoteGrid quotes={quotes.slice().reverse()} />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        goToLastPage={goToLastPage}
      />
    </div>
  );
};

export default QuoteList;