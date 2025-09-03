'use client';

import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Check } from 'lucide-react';
import { imagekitConfig } from '@/lib/imagekit';
import { UploadStyles } from './styles';

interface ImageUploadProps {
  onUploadSuccess: (url: string) => void;
  onUploadError?: (error: any) => void;
  currentImage?: string;
  className?: string;
}

export function ImageUpload({ 
  onUploadSuccess, 
  onUploadError, 
  currentImage,
  className 
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(currentImage || null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      onUploadError?.('Prosím vyberte obrázok');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB
      onUploadError?.('Súbor je príliš veľký (max 10MB)');
      return;
    }

    setIsUploading(true);

    try {
      // Pre teraz použijeme jednoduchý URL input
      // Neskôr môžeme implementovať skutočný ImageKit upload
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setIsUploading(false);
      onUploadSuccess(imageUrl);
    } catch (error) {
      console.error('Upload error:', error);
      setIsUploading(false);
      onUploadError?.(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    onUploadSuccess('');
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <UploadStyles className={className}>
      <div 
        className={`upload-area ${dragActive ? 'drag-active' : ''} ${uploadedImage ? 'has-image' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        {uploadedImage ? (
          <div className="image-preview">
            <img src={uploadedImage} alt="Uploaded" />
            <button 
              type="button"
              className="remove-btn"
              onClick={handleRemoveImage}
            >
              <X size={16} />
            </button>
            <div className="success-indicator">
              <Check size={16} />
              <span>Nahraté</span>
            </div>
          </div>
        ) : (
          <div className="upload-content">
            {isUploading ? (
              <div className="uploading">
                <div className="spinner"></div>
                <p>Nahrávam...</p>
              </div>
            ) : (
              <>
                <div className="upload-icon">
                  <ImageIcon size={32} />
                </div>
                <h3>Nahrajte obrázok</h3>
                <p>Pretiahnite súbor sem alebo kliknite pre výber</p>
                <div className="upload-formats">
                  <span>PNG, JPG, WEBP do 10MB</span>
                </div>
              </>
            )}
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
    </UploadStyles>
  );
}
