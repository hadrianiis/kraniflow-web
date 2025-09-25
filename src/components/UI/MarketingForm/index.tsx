"use client"

import { useRef, useState, useCallback } from "react";
import { PartyPopper } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useToast } from "@/components/UI/Toast";
import type { ContactFormState, ContactFormResponse } from "@/types/contact";

import AnimatedButton from "../AnimatedButton";

import {
  MainContainer,
  FormContainer,
  HeadingContainer,
  ContentContainer,
  ActionContainer,
  Heading,
  Description,
  FormField,
  Label,
  StyledInput,
  StyledTextarea,
  ValidationMessage,
  ConsentContainer,
  ConsentCheckbox,
  ConsentText,
  PrivacyLink
} from "./styles";

export default function MarketingForm() {
  const router = useRouter();
  const { success: showSuccessToast, error: showErrorToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormState>({
    firstName: "",
    age: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consentGiven, setConsentGiven] = useState(false);

  // Refy pre vstupy
  const firstNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Validation helpers
  const isValidEmail = useCallback((email: string) => {
    return email.includes('@');
  }, []);

  const isValidPhone = useCallback((phone: string) => {
    // Allow numbers, spaces, +, -, (, )
    const phoneRegex = /^[0-9\s\+\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.trim().length > 0;
  }, []);

  const isValidAge = useCallback((age: string) => {
    const ageNum = parseInt(age);
    return ageNum >= 1 && ageNum <= 120;
  }, []);

  const isFormValid = useCallback(() => {
    return formData.firstName.trim() && 
           formData.age.trim() && 
           isValidAge(formData.age) &&
           formData.email.trim() && 
           isValidEmail(formData.email) &&
           formData.phone.trim() && 
           isValidPhone(formData.phone) &&
           formData.message.trim() && // Just required, no minimum length
           consentGiven; // User must consent to privacy policy
  }, [formData.firstName, formData.age, formData.email, formData.phone, formData.message, consentGiven, isValidEmail, isValidPhone, isValidAge]);

  const renderForm = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormContainer>
          {/* Heading */}
          <HeadingContainer>
            <Heading>Kontaktný formulár</Heading>
          </HeadingContainer>
          
          {/* Form content */}
          <ContentContainer>
            <Description>
              Vyplňte formulár a my vás budeme kontaktovať do 24 hodín 
              pre dohodnutie konzultácie.
            </Description>
            
            <FormField>
              <Label htmlFor="firstName">Meno a priezvisko *</Label>
              <StyledInput
                ref={firstNameRef}
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
                placeholder="Vaše meno a priezvisko"
                required
              />
            </FormField>
            
            <FormField>
              <Label htmlFor="age">Vek *</Label>
              <StyledInput
                ref={ageRef}
                id="age"
                type="number"
                min="1"
                max="120"
                value={formData.age}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    age: e.target.value,
                  }))
                }
                placeholder="Váš vek"
                required
              />
              {formData.age && !isValidAge(formData.age) && (
                <ValidationMessage $isError>
                  Vek musí byť medzi 1 a 120 rokov
                </ValidationMessage>
              )}
            </FormField>
            
            <FormField>
              <Label htmlFor="email">Email *</Label>
              <StyledInput
                ref={emailRef}
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                placeholder="vas@email.sk"
                required
              />
              {formData.email && !isValidEmail(formData.email) && (
                <ValidationMessage $isError>
                  Email musí obsahovať @
                </ValidationMessage>
              )}
            </FormField>
            
            <FormField>
              <Label htmlFor="phone">Telefónne číslo *</Label>
              <StyledInput
                ref={phoneRef}
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                placeholder="+421 xxx xxx xxx"
                required
              />
              {formData.phone && !isValidPhone(formData.phone) && (
                <ValidationMessage $isError>
                  Telefónne číslo môže obsahovať iba čísla a znaky +, -, (, )
                </ValidationMessage>
              )}
            </FormField>
            
            <FormField>
              <Label htmlFor="message">Správa *</Label>
              <StyledTextarea
                ref={messageRef}
                id="message"
                value={formData.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                placeholder="Napíšte nám o vašich problémoch, potrebách alebo otázkach..."
                required
                rows={4}
              />
            </FormField>
          </ContentContainer>
          
          {/* Privacy consent checkbox */}
          <ConsentContainer>
            <ConsentCheckbox
              type="checkbox"
              id="privacyConsent"
              checked={consentGiven}
              onChange={(e) => setConsentGiven(e.target.checked)}
              required
            />
            <ConsentText htmlFor="privacyConsent">
              Súhlasím s{" "}
              <PrivacyLink 
                href="/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                podmienkami ochrany osobných údajov
              </PrivacyLink>
            </ConsentText>
          </ConsentContainer>
          
          {/* Action button */}
          <ActionContainer>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatedButton
                onClick={async () => {
                  // Set loading state
                  setIsSubmitting(true);
                  
                  try {
                    // Submit form to our API endpoint
                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(formData),
                    });

                    const result: ContactFormResponse = await response.json();

                    if (result.success) {
                      // Show success toast notification
                      showSuccessToast(
                        "Ďakujeme za vašu rezerváciu! Čoskoro vás budeme kontaktovať.", 
                        {
                          icon: <PartyPopper size={18} />,
                          duration: 5000,
                          description: `Vaša rezervácia bola úspešne odoslaná. Kontaktujeme vás do 24 hodín.`,
                        }
                      );
                      
                      // Reset form and redirect to homepage after submission completes
                      setTimeout(() => {
                        setIsSubmitting(false);
                        // Reset form states first
                        setFormData({
                          firstName: "",
                          age: "",
                          email: "",
                          phone: "",
                          message: "",
                        });
                        setConsentGiven(false);
                        
                        // Redirect to homepage
                        router.push('/');
                      }, 1000);
                    } else {
                      // Handle error
                      throw new Error(result.error || 'Neznáma chyba');
                    }
                  } catch (error) {
                    console.error('Form submission error:', error);
                    setIsSubmitting(false);
                    
                    // Show error toast
                    showErrorToast(
                      "Chyba pri odosielaní formulára", 
                      {
                        icon: <PartyPopper size={18} />,
                        duration: 5000,
                        description: error instanceof Error ? error.message : 'Skúste to prosím znovu.',
                      }
                    );
                  }
                }}
                disabled={!isFormValid() || isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Odosielam..." : "Odoslať"}
              </AnimatedButton>
            </motion.div>
          </ActionContainer>
        </FormContainer>
      </motion.div>
    );
  };

  return (
    <MainContainer>
      {renderForm()}
    </MainContainer>
  );
}
