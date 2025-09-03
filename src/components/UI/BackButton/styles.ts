import styled from "styled-components"
import Link from "next/link"

export const StyledLink = styled(Link)`
  display: block;
`

export const Button = styled.button`
  position: relative;
  width: 76px;
  height: 76px;
  overflow: hidden;
  background: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
`

export const DefaultBorder = styled.div`
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  border: 3px solid black;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  transition-delay: 80ms;

  ${Button}:hover & {
    opacity: 0;
    transform: scale(0.75);
    transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-delay: 0ms;
  }
`

export const HoverBorder = styled.div`
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  border: 4px solid #ef4444;
  transform: scale(1.3);
  opacity: 0;
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${Button}:hover & {
    opacity: 1;
    transform: scale(1);
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    transition-delay: 80ms;
  }
`

export const ButtonContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  transition: transform 400ms;

  ${Button}:hover & {
    transform: translateX(-69px);
  }
`

export const IconContainer = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  margin-top: 24px;
  margin-left: 22px;
  margin-right: 18px;

  svg {
    width: 100%;
    height: 100%;
    color: black;
  }
`