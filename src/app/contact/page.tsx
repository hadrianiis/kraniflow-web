"use client"

import React from "react";
import dynamic from "next/dynamic";
import BackButton from "@/components/UI/BackButton";
import { ContactPageContainer, BackButtonWrapper } from "./styles";

// Dynamically import the MarketingForm component with SSR disabled
// This prevents hydration issues with client-side form components
const MarketingForm = dynamic(() => import("@/components/UI/MarketingForm"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <ContactPageContainer>
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <MarketingForm />
    </ContactPageContainer>
  );
}
