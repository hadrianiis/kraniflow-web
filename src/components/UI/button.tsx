"use client";

import * as React from "react"
import styled from "styled-components"

const StyledButton = styled.button<{
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  outline: none;
  border: none;
  cursor: pointer;
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  
  &:focus-visible {
    border: 2px solid hsl(var(--ring));
    box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
  }
  
  svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
  
  /* Variants */
  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return `
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          &:hover {
            background-color: hsl(var(--primary) / 0.9);
          }
        `
      case 'destructive':
        return `
          background-color: hsl(var(--destructive));
          color: white;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          &:hover {
            background-color: hsl(var(--destructive) / 0.9);
          }
          &:focus-visible {
            box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.2);
          }
        `
      case 'outline':
        return `
          border: 1px solid hsl(var(--border));
          background-color: hsl(var(--background));
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          &:hover {
            background-color: hsl(var(--accent));
            color: hsl(var(--accent-foreground));
          }
        `
      case 'secondary':
        return `
          background-color: hsl(var(--secondary));
          color: hsl(var(--secondary-foreground));
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          &:hover {
            background-color: hsl(var(--secondary) / 0.8);
          }
        `
      case 'ghost':
        return `
          &:hover {
            background-color: hsl(var(--accent));
            color: hsl(var(--accent-foreground));
          }
        `
      case 'link':
        return `
          background: none;
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 4px;
          &:hover {
            text-decoration: underline;
          }
        `
      default:
        return `
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          &:hover {
            background-color: hsl(var(--primary) / 0.9);
          }
        `
    }
  }}
  
  /* Sizes */
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          height: 2rem;
          padding: 0 0.75rem;
          border-radius: 0.375rem;
          gap: 0.375rem;
        `
      case 'lg':
        return `
          height: 2.5rem;
          padding: 0 1.5rem;
          border-radius: 0.375rem;
        `
      case 'icon':
        return `
          width: 2.25rem;
          height: 2.25rem;
        `
      default:
        return `
          height: 2.25rem;
          padding: 0 1rem;
        `
    }
  }}
`

function Button({
  variant = 'default',
  size = 'default',
  ...props
}: React.ComponentProps<"button"> & {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}) {
  return (
    <StyledButton
      data-slot="button"
      variant={variant}
      size={size}
      {...props}
    />
  )
}

export { Button }
