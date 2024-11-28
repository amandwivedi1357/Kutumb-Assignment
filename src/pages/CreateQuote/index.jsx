import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


import ImageUpload from './ImageUpload';
import { createQuote, uploadMedia } from '../../services/api';
import { useQuotes } from '../../hooks/useQuotes';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const CreateQuote = () => {
  const [text, setText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { addNewQuote,updateTotalQuotes } = useQuotes();

  const handleImageSelect = (file) => {
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage || !text.trim()) {
      toast.error('Please provide both an image and text');
      return;
    }

    setIsLoading(true);
    try {
      let mediaUrl = null;
      if (selectedImage) {
        const mediaResponse = await uploadMedia(selectedImage);
        mediaUrl = mediaResponse[0].url; 
      }
      const quoteResponse = await createQuote(text, mediaUrl);
     
      addNewQuote(quoteResponse.data);
      updateTotalQuotes(quoteResponse?.data?.id)
      
      toast.success('Quote created successfully!');
        navigate('/quotes');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create quote');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/quotes')}
        >
          Back to Quotes
        </Button>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Create New Quote
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <ImageUpload
              onImageSelect={handleImageSelect}
              preview={preview}
            />

            <Input
              label="Quote Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your quote..."
              required
              className="h-32"
              as="textarea"
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                isLoading={isLoading}
                disabled={!selectedImage || !text.trim()}
              >
                Create Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateQuote;