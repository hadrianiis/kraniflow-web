"use client"

import { Loader2 } from "lucide-react"
import { Button } from "./styles"

interface SendButtonProps {
  children: React.ReactNode
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  className?: string
}

export default function SendButton({
  children,
  onClick,
  loading = false,
  disabled = false,
  type = "button",
  className = ""
}: SendButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Sending...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
