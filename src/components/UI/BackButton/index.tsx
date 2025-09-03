"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import {
  StyledLink,
  Button,
  DefaultBorder,
  HoverBorder,
  ButtonContent,
  IconContainer
} from "./styles"

export default function BackButton() {
  return (
    <StyledLink href="/">
      <Button>
        <DefaultBorder />
        <HoverBorder />
        <ButtonContent>
          <IconContainer>
            <ArrowLeft />
          </IconContainer>
          <IconContainer>
            <ArrowLeft />
          </IconContainer>
        </ButtonContent>
      </Button>
    </StyledLink>
  )
}
