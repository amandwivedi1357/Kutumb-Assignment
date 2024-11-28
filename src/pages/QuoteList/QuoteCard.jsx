/* eslint-disable react/prop-types */

import { formatDate } from '../../lib/utils';
import { User, Calendar } from 'lucide-react';

const QuoteCard = ({ quote }) => {
 
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="aspect-[16/9] w-full">
        <img
          src={quote.mediaUrl}
          alt="Quote background"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="absolute bottom-0 p-6 text-white">
          <p className="mb-4 text-lg font-medium leading-relaxed">{quote.text}</p>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{quote.username}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{formatDate(quote.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;

// import React from 'react';

// const QuoteCard = ({ quote }) => {
//   return (
//     <div className="border p-4 rounded-lg shadow">
//       <h3 className="font-bold">{quote.username}</h3>
//       <p>{quote.text}</p>
//       {quote.mediaUrl && <img src={quote.mediaUrl} alt="Quote media" />}
//     </div>
//   );
// };

// export default QuoteCard;