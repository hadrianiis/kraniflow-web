'use client';

import { SectionProps } from '@/types/components';
import { Wrapper, Inner } from './styles';

/**
 * Section - A reusable section wrapper component
 * Provides consistent spacing and layout across all sections
 */
const Section = ({
  children,
  id,
  background = 'white',
  padding = 'lg',
  isMobile,
  className,
  ...props
}: SectionProps) => {
  const wrapperProps: any = {
    id,
    $background: background,
    $padding: padding,
    className,
    ...props
  };

  const innerProps: any = {};

  if (isMobile !== undefined) {
    wrapperProps.$isMobile = isMobile;
    innerProps.$isMobile = isMobile;
  }

  return (
    <Wrapper {...wrapperProps}>
      <Inner {...innerProps}>
        {children}
      </Inner>
    </Wrapper>
  );
};

export default Section;
