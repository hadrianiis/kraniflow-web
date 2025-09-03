'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Save, 
  Eye, 
  ArrowLeft, 
  Image as ImageIcon,
  Type,
  Tag,
  Calendar
} from 'lucide-react';
import Link from 'next/link';
import { EditorStyles } from './styles';
import { PostPreview } from '@/components/Admin/PostPreview';
import { ImageUpload } from '@/components/Admin/ImageUpload';

export default function NewPostPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    featured: false,
    image: '',
    author: 'Mgr. Kika Nováková'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSave = async (publish = false) => {
    setIsLoading(true);
    
    try {
      // TODO: Implement save functionality
      console.log('Saving post:', { ...formData, published: publish });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      router.push('/admin/posts');
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [
    'Základy terapie',
    'Stres a napätie',
    'Terapia pre deti',
    'Biodynamický prístup',
    'Bolesť hlavy',
    'Príprava na terapiu'
  ];

  return (
    <EditorStyles>
      <div className="editor-header">
        <div className="header-left">
          <Link href="/admin/posts" className="back-btn">
            <ArrowLeft size={16} />
            Späť na články
          </Link>
          <h1>Nový článok</h1>
        </div>

        <div className="header-actions">
          <button 
            className="preview-btn"
            onClick={() => handleSave(false)}
            disabled={isLoading}
          >
            <Eye size={16} />
            Náhľad
          </button>
          <button 
            className="save-btn"
            onClick={() => handleSave(false)}
            disabled={isLoading}
          >
            <Save size={16} />
            {isLoading ? 'Ukladám...' : 'Uložiť koncept'}
          </button>
          <button 
            className="publish-btn"
            onClick={() => handleSave(true)}
            disabled={isLoading}
          >
            <Save size={16} />
            {isLoading ? 'Publikujem...' : 'Publikovať'}
          </button>
        </div>
      </div>

      <div className="editor-content">
        <div className="editor-main">
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="title">
                <Type size={16} />
                Názov článku
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Zadajte názov článku..."
                className="title-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="excerpt">Krátky popis</label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                placeholder="Krátky popis článku, ktorý sa zobrazí v zozname..."
                rows={3}
                className="excerpt-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Obsah článku</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Napíšte obsah článku..."
                rows={20}
                className="content-input"
              />
            </div>
          </div>
        </div>

        <div className="editor-sidebar">
          <div className="sidebar-section">
            <h3>Publikovanie</h3>
            <div className="form-group">
              <label htmlFor="author">Autor</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="author-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Kategória</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="category-select"
              >
                <option value="">Vyberte kategóriu</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="tags">
                <Tag size={16} />
                Tagy
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="tag1, tag2, tag3"
                className="tags-input"
              />
              <small>Oddeľte tagy čiarkami</small>
            </div>

            <div className="form-group">
              <label htmlFor="image">
                <ImageIcon size={16} />
                Obrázok článku
              </label>
              <ImageUpload
                onUploadSuccess={(url) => {
                  setFormData(prev => ({ ...prev, image: url }));
                }}
                currentImage={formData.image}
                className="image-upload"
              />
              {formData.image && (
                <div className="image-url">
                  <small>URL: {formData.image}</small>
                </div>
              )}
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                Featured článok
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-section">
        <h2>Náhľad článku</h2>
        <PostPreview postData={formData} />
      </div>
    </EditorStyles>
  );
}
