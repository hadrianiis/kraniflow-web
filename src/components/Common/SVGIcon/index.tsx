'use client';

import React, { memo } from 'react';
import styled from 'styled-components';

interface SVGIconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  color?: string;
  hoverColor?: string;
}

const IconWrapper = styled.div<{
  $width: number;
  $height: number;
  $color?: string;
  $hoverColor?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$width}px;
  height: ${props => props.$height}px;
  transition: all 0.2s ease;
  
  svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.$color || 'currentColor'};
    transition: fill 0.2s ease;
  }
  
  ${props => props.$hoverColor && `
    &:hover svg {
      fill: ${props.$hoverColor};
    }
  `}
`;

const SVGIcon = memo(function SVGIcon({
  src,
  alt,
  width = 24,
  height = 24,
  className,
  color,
  hoverColor,
}: SVGIconProps) {
  const [svgContent, setSvgContent] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const loadSVG = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        
        // Use absolute URL for network access
        const response = await fetch(src.startsWith('/') ? src : `/svgs/${src}`);
        
        if (!response.ok) {
          throw new Error(`Failed to load SVG: ${response.status}`);
        }
        
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error('Error loading SVG:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadSVG();
  }, [src]);

  if (isLoading) {
    const loadingProps: any = {
      $width: width,
      $height: height,
      className
    };

    if (color !== undefined) {
      loadingProps.$color = color;
    }
    if (hoverColor !== undefined) {
      loadingProps.$hoverColor = hoverColor;
    }

    return (
      <IconWrapper {...loadingProps}>
        <div 
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite',
            borderRadius: '4px'
          }}
        />
        <style jsx>{`
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </IconWrapper>
    );
  }

  if (hasError) {
    const errorProps: any = {
      $width: width,
      $height: height,
      className,
      title: `Failed to load: ${alt}`
    };

    if (color !== undefined) {
      errorProps.$color = color;
    }
    if (hoverColor !== undefined) {
      errorProps.$hoverColor = hoverColor;
    }

    return (
      <IconWrapper {...errorProps}>
        <div 
          style={{
            width: '100%',
            height: '100%',
            background: '#f0f0f0',
            border: '1px dashed #ccc',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#999'
          }}
        >
          ?
        </div>
      </IconWrapper>
    );
  }

  const successProps: any = {
    $width: width,
    $height: height,
    className
  };

  if (color !== undefined) {
    successProps.$color = color;
  }
  if (hoverColor !== undefined) {
    successProps.$hoverColor = hoverColor;
  }

  return (
    <IconWrapper {...successProps}>
      <div 
        dangerouslySetInnerHTML={{ __html: svgContent }}
        style={{ width: '100%', height: '100%' }}
        aria-label={alt}
      />
    </IconWrapper>
  );
});

SVGIcon.displayName = 'SVGIcon';

export default SVGIcon;
