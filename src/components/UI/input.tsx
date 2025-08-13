"use client";

import * as React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  display: flex;
  height: 2.25rem;
  width: 100%;
  min-width: 0;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--border));
  background-color: transparent;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
  
  &::placeholder {
    color: hsl(var(--muted-foreground));
  }
  
  &::selection {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  }
  
  &:focus-visible {
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
  }
  
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &[aria-invalid="true"] {
    box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.2);
  }
  
  &[type="file"] {
    padding: 0;
    border: none;
    
    &::file-selector-button {
      color: hsl(var(--foreground));
      background-color: transparent;
      border: none;
      height: 1.75rem;
      font-size: 0.875rem;
      font-weight: 500;
      padding: 0 0.5rem;
      margin-right: 0.5rem;
    }
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`

function Input({ type, ...props }: React.ComponentProps<"input">) {
  return (
    <StyledInput
      type={type}
      data-slot="input"
      {...props}
    />
  )
}

export { Input }
