// ImageKit konfigurácia
export const imagekitConfig = {
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/your-imagekit-id',
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || 'your-public-key',
  authenticationEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_AUTH_ENDPOINT || '/api/imagekit/auth',
};

// Utility funkcie pre ImageKit
export const getImageKitUrl = (path: string, transformations?: any) => {
  const baseUrl = imagekitConfig.urlEndpoint;
  const transformString = transformations ? 
    Object.entries(transformations)
      .map(([key, value]) => `${key}-${value}`)
      .join(',') : '';
  
  return `${baseUrl}/${path}${transformString ? `?tr=${transformString}` : ''}`;
};

// Prednastavené transformácie pre rôzne veľkosti
export const imageTransformations = {
  thumbnail: { width: 300, height: 200, crop: 'maintain_ratio' },
  medium: { width: 600, height: 400, crop: 'maintain_ratio' },
  large: { width: 1200, height: 800, crop: 'maintain_ratio' },
  blogFeatured: { width: 800, height: 400, crop: 'maintain_ratio' },
  avatar: { width: 100, height: 100, crop: 'maintain_ratio' },
};
