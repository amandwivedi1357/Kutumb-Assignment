/* eslint-disable react/prop-types */
import  { useRef } from 'react';
import { Image as ImageIcon, Upload } from 'lucide-react';
import Button from '../../components/ui/Button';

const ImageUpload = ({ onImageSelect, preview }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={(e) => onImageSelect(e.target.files[0])}
      />
      
      {preview ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full object-cover"
          />
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-4 right-4"
            onClick={handleClick}
          >
            <Upload className="mr-2 h-4 w-4" />
            Change Image
          </Button>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="flex aspect-[16/9] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
        >
          <ImageIcon className="mb-4 h-12 w-12 text-gray-400" />
          <p className="text-sm text-gray-600">Click to upload an image</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;