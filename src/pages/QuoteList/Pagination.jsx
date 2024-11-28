import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import { useSelector } from 'react-redux';

const Pagination = ({ currentPage, totalPages, onPageChange,goToLastPage }) => {
  const totalQ = useSelector((state) => state.quotes);

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      {
        totalQ.totalQuotes!==0 && currentPage!==40 &&
         <Button
        variant="ghost"
        size="sm"
        onClick={() => {goToLastPage()


        }}
        disabled={currentPage === totalPages}
       
      >
       Last Page
      </Button>
      }
     
    </div>
  );
};

export default Pagination;