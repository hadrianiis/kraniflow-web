import styled from "styled-components"

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  background-color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 14px;
  transition: all 0.5s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 600;
  color: #1f2937;
  width: 100%;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  /* Animated background effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
  }

  &:hover:not(:disabled) {
    letter-spacing: 2px;
    background-color: #F2BCBB;
    color: #1a1a1a;
    box-shadow: rgba(242, 188, 187, 0.4) 0px 7px 29px 0px;
    
    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    letter-spacing: 2px;
    background-color: #F2BCBB;
    color: #1a1a1a;
    box-shadow: rgba(242, 188, 187, 0.2) 0px 0px 0px 0px;
    transform: translateY(8px);
    transition: 100ms;
  }

  &:focus {
    outline: none;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px, 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    letter-spacing: 1.5px;
    background-color: white;
    color: #1f2937;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  }

  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    &:hover:not(:disabled) {
      letter-spacing: 1.5px;
      background-color: white;
      color: #1f2937;
      box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    }
  }
`
