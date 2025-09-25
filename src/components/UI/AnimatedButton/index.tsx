"use client"

import React from "react"
import { Button } from "./styles"

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  className?: string
}

export default function AnimatedButton({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = ""
}: AnimatedButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </Button>
  )
}
