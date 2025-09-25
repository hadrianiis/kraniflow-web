"use client"

import { memo, useCallback } from 'react';
import { Button, ButtonSpan, LinkButton } from "./styles"

interface UiverseButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  className?: string
  href?: string
  padding?: string
}

const UiverseButton = memo<UiverseButtonProps>(({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  href,
  padding
}) => {
  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);

  // Ak je zadaný href, použijeme Link komponent
  if (href) {
    return (
      <LinkButton
        href={href}
        className={className}
        style={{ padding }}
      >
        <ButtonSpan>{children}</ButtonSpan>
      </LinkButton>
    );
  }

  return (
    <Button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={className}
      style={{ padding }}
    >
      <ButtonSpan>{children}</ButtonSpan>
    </Button>
  )
});

UiverseButton.displayName = 'UiverseButton';

export default UiverseButton;
