import styled from "styled-components"

export const ContactPageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  position: relative;
  background: var(--Background, #f1f1f1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`

export const BackButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  
  @media (min-width: 480px) {
    top: 1.5rem;
    left: 1.5rem;
  }
  
  @media (min-width: 768px) {
    top: 2rem;
    left: 2rem;
  }

  @media (min-width: 1024px) {
    top: 2.5rem;
    left: 2.5rem;
  }
`
