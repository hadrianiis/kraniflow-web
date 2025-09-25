import styled from "styled-components"
import Link from "next/link"

export const StyledLink = styled(Link)`
  display: block;
`

export const Button = styled.button`
  position: relative;
  width: 56px;
  height: 56px;
  overflow: hidden;
  background: transparent;
  border: 0;
  cursor: pointer;
  outline: none;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
`

export const DefaultBorder = styled.div`
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  border: 2px solid black;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  transition-delay: 80ms;

  ${Button}:hover & {
    opacity: 0;
    transform: scale(0.75);
    transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-delay: 0ms;
  }

  @media (max-width: 768px) {
    inset: 4px;
    border-width: 1.5px;
  }

  @media (max-width: 480px) {
    inset: 3px;
    border-width: 1px;
  }
`

export const HoverBorder = styled.div`
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  border: 3px solid #ef4444;
  transform: scale(1.3);
  opacity: 0;
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${Button}:hover & {
    opacity: 1;
    transform: scale(1);
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    transition-delay: 80ms;
  }

  @media (max-width: 768px) {
    inset: 4px;
    border-width: 2px;
  }

  @media (max-width: 480px) {
    inset: 3px;
    border-width: 1.5px;
  }
`

export const ButtonContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  transition: transform 400ms;

  ${Button}:hover & {
    transform: translateX(-49px);
  }

  @media (max-width: 768px) {
    ${Button}:hover & {
      transform: translateX(-42px);
    }
  }

  @media (max-width: 480px) {
    ${Button}:hover & {
      transform: translateX(-38px);
    }
  }
`

export const IconContainer = styled.span`
  display: block;
  width: 22px;
  height: 22px;
  margin-top: 17px;
  margin-left: 17px;
  margin-right: 13px;

  svg {
    width: 100%;
    height: 100%;
    color: black;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-top: 14px;
    margin-left: 14px;
    margin-right: 12px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    margin-top: 13px;
    margin-left: 13px;
    margin-right: 10px;
  }
`