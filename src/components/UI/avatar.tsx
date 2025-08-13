"use client";

import * as React from "react"
import styled from "styled-components"

const AvatarRoot = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  border-radius: 100%;
  background-color: hsl(var(--muted));
  color: hsl(var(--muted-foreground));
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

const AvatarFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 500;
`

interface AvatarProps extends React.ComponentProps<"div"> {
  size?: number;
}

function Avatar({ size = 40, ...props }: AvatarProps) {
  return (
    <AvatarRoot
      style={{ width: size, height: size }}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback } 