"use client"

import React from "react"
import { Button } from "./styles"

interface MobileSendButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  className?: string
}

export default function MobileSendButton({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = ""
}: MobileSendButtonProps) {
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
