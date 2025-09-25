"use client"

import React from "react";
import dynamic from "next/dynamic";
import BackButton from "@/components/UI/BackButton";
import { ToastProvider } from "@/components/UI/Toast";
import ErrorBoundary from "@/components/UI/ErrorBoundary";
import { ContactPageContainer, BackButtonWrapper } from "./styles";



// Dynamically import the MarketingForm component with SSR disabled
// This prevents hydration issues with client-side form components
const MarketingForm = dynamic(() => import("@/components/UI/MarketingForm"), {
  ssr: false,
  loading: () => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '400px',
      fontSize: '1.125rem',
      color: '#6b7280'
    }}>
      Načítavam formulár...
    </div>
  )
});

export default function ContactPage() {
  return (
    <ContactPageContainer>
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <ErrorBoundary>
        <ToastProvider>
          <MarketingForm />
        </ToastProvider>
      </ErrorBoundary>
    </ContactPageContainer>
  );
}
