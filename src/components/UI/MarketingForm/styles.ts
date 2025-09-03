import styled from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 28rem;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 0;
`

export const HeadingContainer = styled.div`
  flex: none;
  padding: 0 0 1rem 0;
  text-align: center;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
  font-weight: 700;
  min-height: 60px;
  color: #1f2937;
  margin: 0;
  line-height: 1.2;

  &:nth-child(2) {
    font-size: 2rem;
  }
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 1rem 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
`

export const ListContainer = styled.div`
  margin-bottom: 2rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 1rem;
`

export const StepDescription = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.5;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 120px;
  width: 100%;
  max-width: 24rem;
  margin: 0 auto;
`

export const OptionButton = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  min-width: 70px;
  background: ${props => props.$isSelected ? '#1f2937' : 'transparent'};
  color: ${props => props.$isSelected ? 'white' : '#374151'};
  font-weight: ${props => props.$isSelected ? '600' : '400'};
  border: 1px solid ${props => props.$isSelected ? '#1f2937' : '#d1d5db'};
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
  transition: all 300ms ease;
  cursor: pointer;
  outline: none;
  font-size: 1rem;

  &:hover {
    color: white;
    background: #1f2937;
    border-color: #1f2937;
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`

export const StyledInput = styled.input`
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background: white;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #1f2937;
  outline: none;
  transition: all 300ms ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-color: #3b82f6;
    background: white;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const StyledTextarea = styled.textarea`
  min-height: 120px;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background: white;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #1f2937;
  outline: none;
  transition: all 300ms ease;
  resize: vertical;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-color: #3b82f6;
    background: white;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const PrimaryButton = styled.button`
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
`

export const SecondaryButton = styled.button`
  background: transparent;
  border: 1px solid #d1d5db;
  color: #374151;
  font-family: inherit;
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
`
