/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import QuoteCard from "./QuoteCard"
import { Link, useNavigate } from "react-router-dom"
import { PlusCircle, QuoteIcon } from "lucide-react"
import Button from "../../components/ui/Button"

export default function QuoteGrid({ quotes }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
 
        <div className="text-center mb-12 space-y-4">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Inspiring Quotes
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover and share the wisdom that inspires you
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            
              <Button 
              onClick = {()=>navigate('/create')}
                size="lg" 
                className="bg-black text-white hover:bg-gray-800"
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Add New Quote
              </Button>
           
          </motion.div>
          
        </div>

     
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.length && quotes.map((quote, index) => (
            <motion.div
              key={`index-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <QuoteCard quote={quote} />
            </motion.div>
          ))}
        </div>

        
        {quotes.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <QuoteIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No quotes yet</h3>
            <p className="mt-1 text-gray-500">Get started by adding your first quote.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}