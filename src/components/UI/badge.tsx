"use client";

import * as React from "react"
import styled from "styled-components"

const StyledBadge = styled.span<{
  $variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
  gap: 0.25rem;
  transition: color 0.2s, box-shadow 0.2s;
  overflow: hidden;
  
  svg {
    width: 0.75rem;
    height: 0.75rem;
    pointer-events: none;
  }
  
  &:focus-visible {
    border: 2px solid hsl(var(--ring));
    box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
  }
  
  /* Variants */
  ${({ $variant }) => {
    switch ($variant) {
      case 'default':
        return `
          border-color: transparent;
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          &:hover {
            background-color: hsl(var(--primary) / 0.9);
          }
        `
      case 'secondary':
        return `
          border-color: transparent;
          background-color: hsl(var(--secondary));
          color: hsl(var(--secondary-foreground));
          &:hover {
            background-color: hsl(var(--secondary) / 0.9);
          }
        `
      case 'destructive':
        return `
          border-color: transparent;
          background-color: hsl(var(--destructive));
          color: white;
          &:hover {
            background-color: hsl(var(--destructive) / 0.9);
          }
          &:focus-visible {
            box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.2);
          }
        `
      case 'outline':
        return `
          color: hsl(var(--foreground));
          &:hover {
            background-color: hsl(var(--accent));
            color: hsl(var(--accent-foreground));
          }
        `
      default:
        return `
          border-color: transparent;
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          &:hover {
            background-color: hsl(var(--primary) / 0.9);
          }
        `
    }
  }}
`

function Badge({
  variant = 'default',
  ...props
}: React.ComponentProps<"span"> & {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}) {
  return (
    <StyledBadge
      data-slot="badge"
      $variant={variant}
      {...props}
    />
  )
}

export { Badge }
