// Component prop types for better type safety

export interface StyledProps {
  $align?: 'left' | 'center' | 'right';
  $isVisible?: boolean;
  $delay?: number;
  $background?: 'white' | 'gray' | 'primary' | 'secondary' | 'transparent';
  $padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  $isMobile?: boolean;
}

export interface ContentSectionProps {
  $isReversed: boolean;
}

export interface ImageContainerProps {
  $isLongImage: boolean;
}

export interface TherapyCardProps {
  $index: number;
}

export interface SectionProps {
  children?: React.ReactNode;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'secondary';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  isMobile?: boolean;
  className?: string;
  [key: string]: any;
}

// Common component interfaces
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ImageProps extends BaseComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  quality?: number;
  priority?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  style?: React.CSSProperties;
}

// Animation variants type
export interface AnimationVariants {
  [key: string]: {
    opacity?: number;
    y?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
}