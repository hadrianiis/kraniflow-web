import styled from "styled-components"
import { media } from "@/lib/theme"

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg};
  box-sizing: border-box;
  background: var(--Background, #f1f1f1);
  
  ${media.sm} {
    padding: ${({ theme }) => theme.spacing.xl};
  }
  
  ${media.md} {
    padding: ${({ theme }) => theme.spacing['2xl']};
  }
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 24rem;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 0;
  margin: 0 auto;
  
  ${media.sm} {
    min-height: 500px;
    max-width: 22rem;
  }
  
  ${media.lg} {
    max-width: 28rem;
  }
  
  @media (max-width: 480px) {
    min-height: 480px;
    max-width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`

export const HeadingContainer = styled.div`
  flex: none;
  padding: 0 0 1rem 0;
  text-align: center;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  min-height: 60px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  padding: 0 ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};

  &:nth-child(2) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
  
  ${media.sm} {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    min-height: 50px;
    
    &:nth-child(2) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
  }
  
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    min-height: 45px;
    padding: 0 ${({ theme }) => theme.spacing.xs};
    
    &:nth-child(2) {
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
    }
  }
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 1rem 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 480px) {
    padding: 0.75rem 0;
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 0;
  }
`

export const ActionContainer = styled.div`
  flex: none;
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Description = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  padding: 0 ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
  
  ${media.sm} {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    padding: 0 ${({ theme }) => theme.spacing.xs};
  }
`


export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  ${media.sm} {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: 480px) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    gap: 0.2rem;
  }
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
  
  ${media.sm} {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
  
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`

export const StyledInput = styled.input`
  height: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid ${({ theme }) => theme.colors.border.light};
  background: rgba(255, 255, 255, 0.9);
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  outline: none;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-sizing: border-box;
  width: 100%;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
  backdrop-filter: blur(10px);

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
    font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  ${media.sm} {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: 480px) {
    height: 3rem;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
    font-size: 16px; /* Prevents zoom on iOS */
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`

export const StyledTextarea = styled.textarea`
  min-height: 120px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid ${({ theme }) => theme.colors.border.light};
  background: rgba(255, 255, 255, 0.9);
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  outline: none;
  transition: all ${({ theme }) => theme.transitions.normal};
  resize: vertical;
  box-sizing: border-box;
  width: 100%;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
  backdrop-filter: blur(10px);

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
    font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  ${media.sm} {
    min-height: 110px;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: 480px) {
    min-height: 100px;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
    font-size: 16px; /* Prevents zoom on iOS */
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`

export const PrimaryButton = styled.button`
  background: #1f2937;
  color: white;
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
  max-width: 200px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background-color: #111827;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 480px) {
    padding: 1.125rem 2rem;
    font-size: 1rem;
    border-radius: 1rem;
    min-height: 48px; /* Touch-friendly minimum */
  }
  
  @media (max-width: 768px) {
    padding: 1.0625rem 2rem;
    font-size: 1.0625rem;
  }
`

export const SecondaryButton = styled.button`
  background: transparent;
  border: 1px solid #d1d5db;
  color: #374151;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms ease;
  width: 120px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    border-color: #1f2937;
    background: #f9fafb;
    color: #1f2937;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 24rem;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    gap: 0.875rem;
  }
`

export const ProgressIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const ProgressDot = styled.div<{ $isActive: boolean; $isCompleted: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => 
    props.$isCompleted ? '#10b981' : 
    props.$isActive ? '#1f2937' : '#e5e7eb'
  };
  transition: all 300ms ease;
`

export const ValidationMessage = styled.div<{ $isError?: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ $isError, theme }) => 
    $isError ? '#ef4444' : theme.colors.text.muted
  };
  margin-top: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
`

export const ConsentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.xs} 0 ${({ theme }) => theme.spacing.lg} 0;
  
  ${media.sm} {
    gap: ${({ theme }) => theme.spacing.sm};
    margin: ${({ theme }) => theme.spacing.xs} 0 ${({ theme }) => theme.spacing.md} 0;
  }
  
  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacing.xs};
    margin: ${({ theme }) => theme.spacing.xs} 0 ${({ theme }) => theme.spacing.sm} 0;
    align-items: flex-start;
  }
`

export const ConsentCheckbox = styled.input`
  margin: 0;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary};
  background: rgba(255, 255, 255, 0.9);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  backdrop-filter: blur(10px);
  
  ${media.sm} {
    width: 1.0625rem;
    height: 1.0625rem;
  }
  
  @media (max-width: 480px) {
    width: 1.125rem;
    height: 1.125rem;
    margin-top: 0.125rem; /* Align with text */
  }
`

export const ConsentText = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
  
  ${media.sm} {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
  
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    align-items: flex-start;
  }
`

export const PrivacyLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: color ${({ theme }) => theme.transitions.fast};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
  
  ${media.sm} {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
  
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    text-decoration-thickness: 1px;
  }
`
