'use client';

import { useState } from 'react';
import { 
  Upload, 
  Image as ImageIcon, 
  Search, 
  Grid, 
  List,
  Trash2,
  Download,
  Eye
} from 'lucide-react';
import { MediaStyles } from './styles';

interface MediaFile {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video' | 'document';
  size: string;
  uploadedAt: string;
  alt?: string;
}

const mockMedia: MediaFile[] = [
  {
    id: '1',
    name: 'kranio-about1.avif',
    url: '/images/kranio-about1.avif',
    type: 'image',
    size: '2.3 MB',
    uploadedAt: '2024-01-15',
    alt: 'Kraniosakrálna terapia'
  },
  {
    id: '2',
    name: 'kika-photo-kranio.avif',
    url: '/images/kika-photo-kranio.avif',
    type: 'image',
    size: '1.8 MB',
    uploadedAt: '2024-01-14',
    alt: 'Mgr. Kika Nováková'
  },
  {
    id: '3',
    name: 'stress-cells.avif',
    url: '/images/stress-cells.avif',
    type: 'image',
    size: '3.1 MB',
    uploadedAt: '2024-01-13',
    alt: 'Stresové bunky'
  },
  {
    id: '4',
    name: 'skeleton.avif',
    url: '/images/skeleton.avif',
    type: 'image',
    size: '2.7 MB',
    uploadedAt: '2024-01-12',
    alt: 'Kostra'
  }
];

export default function MediaPage() {
  const [media, setMedia] = useState<MediaFile[]>(mockMedia);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const filteredMedia = media.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (file.alt && file.alt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // TODO: Implement actual file upload
    console.log('Uploading files:', files);
  };

  const handleDelete = (id: string) => {
    if (confirm('Ste si istí, že chcete vymazať tento súbor?')) {
      setMedia(prev => prev.filter(file => file.id !== id));
    }
  };

  const handleSelectFile = (id: string) => {
    setSelectedFiles(prev => 
      prev.includes(id) 
        ? prev.filter(fileId => fileId !== id)
        : [...prev, id]
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sk-SK');
  };

  return (
    <MediaStyles>
      <div className="media-header">
        <div className="header-content">
          <h1>Správa médií</h1>
          <p>Spravujte obrázky, videá a dokumenty</p>
        </div>

        <div className="header-actions">
          <div className="upload-area">
            <input
              type="file"
              id="file-upload"
              multiple
              accept="image/*,video/*,.pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="file-input"
            />
            <label htmlFor="file-upload" className="upload-btn">
              <Upload size={16} />
              Nahrať súbory
            </label>
          </div>
        </div>
      </div>

      <div className="media-controls">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Vyhľadať súbory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid size={16} />
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List size={16} />
          </button>
        </div>
      </div>

      <div className="media-stats">
        <div className="stat">
          <span className="stat-label">Celkovo súborov:</span>
          <span className="stat-value">{media.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Zobrazené:</span>
          <span className="stat-value">{filteredMedia.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Vybrané:</span>
          <span className="stat-value">{selectedFiles.length}</span>
        </div>
      </div>

      {filteredMedia.length === 0 ? (
        <div className="empty-state">
          <ImageIcon size={48} />
          <h3>Žiadne súbory</h3>
          <p>Nenašli sa žiadne súbory zodpovedajúce vašim kritériám.</p>
        </div>
      ) : (
        <div className={`media-grid ${viewMode}`}>
          {filteredMedia.map((file) => (
            <div 
              key={file.id} 
              className={`media-item ${selectedFiles.includes(file.id) ? 'selected' : ''}`}
              onClick={() => handleSelectFile(file.id)}
            >
              <div className="media-preview">
                {file.type === 'image' ? (
                  <img src={file.url} alt={file.alt || file.name} />
                ) : (
                  <div className="file-icon">
                    <ImageIcon size={32} />
                  </div>
                )}
                
                <div className="media-overlay">
                  <button 
                    className="action-btn view"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(file.url, '_blank');
                    }}
                  >
                    <Eye size={16} />
                  </button>
                  <button 
                    className="action-btn download"
                    onClick={(e) => {
                      e.stopPropagation();
                      const link = document.createElement('a');
                      link.href = file.url;
                      link.download = file.name;
                      link.click();
                    }}
                  >
                    <Download size={16} />
                  </button>
                  <button 
                    className="action-btn delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(file.id);
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="media-info">
                <h4 className="media-name">{file.name}</h4>
                <div className="media-meta">
                  <span className="media-size">{file.size}</span>
                  <span className="media-date">{formatDate(file.uploadedAt)}</span>
                </div>
                {file.alt && (
                  <p className="media-alt">{file.alt}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedFiles.length > 0 && (
        <div className="bulk-actions">
          <div className="bulk-info">
            Vybraté súbory: {selectedFiles.length}
          </div>
          <div className="bulk-buttons">
            <button 
              className="bulk-btn delete"
              onClick={() => {
                if (confirm(`Ste si istí, že chcete vymazať ${selectedFiles.length} súborov?`)) {
                  setMedia(prev => prev.filter(file => !selectedFiles.includes(file.id)));
                  setSelectedFiles([]);
                }
              }}
            >
              <Trash2 size={16} />
              Vymazať vybrané
            </button>
          </div>
        </div>
      )}
    </MediaStyles>
  );
}
