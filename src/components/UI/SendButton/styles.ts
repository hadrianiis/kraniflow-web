import styled from "styled-components"

export const Button = styled.button`
  background: #1f2937;
  color: white;
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms ease;
  border: none;
  width: 100%;
  box-shadow: 0 4px 12px rgba(31, 41, 55, 0.15);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background-color: #111827;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(31, 41, 55, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(31, 41, 55, 0.15);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`
