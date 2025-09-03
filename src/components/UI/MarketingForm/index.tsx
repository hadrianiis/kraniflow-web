"use client"

import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { ChevronRight, Check, PartyPopper } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/UI/Toast";

import SendButton from "../SendButton";

import {
  MainContainer,
  FormContainer,
  HeadingContainer,
  ContentContainer,
  ActionContainer,
  Heading,
  Description,
  ListContainer,
  ListItem,
  StepDescription,
  ButtonContainer,
  OptionButton,
  FormField,
  Label,
  StyledInput,
  StyledTextarea,
  PrimaryButton,
  SecondaryButton,
  ButtonRow
} from "./styles";

export default function MarketingForm() {
  const router = useRouter();
  const { success: showSuccessToast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [selectedProblem, setSelectedProblem] = useState("");

  const problems = useMemo(
    () => [
      { value: "adhd", label: "ADHD / Poruchy pozornosti" },
      { value: "stres", label: "Stres a úzkosť" },
      { value: "bolest", label: "Chronická bolesť" },
      { value: "spánek", label: "Problémy so spánkom" },
      { value: "trauma", label: "Trauma a PTSD" },
      { value: "depresia", label: "Depresia" },
      { value: "migréna", label: "Migrény a bolesti hlavy" },
      { value: "iné", label: "Iné problémy" },
    ],
    []
  );

  // Refy pre vstupy
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  // Funkcia na odstránenie fokusu z aktuálneho vstupu
  const removeFocus = useCallback(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, []);

  useEffect(() => {
    removeFocus();
  }, [step, removeFocus]);

  const toggleProblem = useCallback((value: string) => {
    setSelectedProblem((prev) => (prev === value ? "" : value));
  }, []);

  const handleNext = useCallback(() => {
    removeFocus();
    setStep((prev) => prev + 1);
  }, [removeFocus]);

  const totalSteps = 2;

  const renderStep = () => {
    return (
      <AnimatePresence mode="wait">
        {step && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <FormContainer>
              {/* Heading fixed top */}
              <HeadingContainer>
                {step === 1 && (
                  <Heading>Aký problém vás trápi?</Heading>
                )}
                {step === 2 && (
                  <Heading>Vaše kontaktné údaje</Heading>
                )}
              </HeadingContainer>
              
              {/* Step content middle */}
              <ContentContainer>
                {step === 1 && (
                  <>
                    <Description>
                      Kraniosakrálna terapia môže pomôcť s rôznymi problémami. 
                      Vyberte si problém, ktorý vás najviac trápi.
                    </Description>
                    <ButtonContainer>
                      {problems.map((problem) => (
                        <motion.div
                          key={problem.value}
                          whileHover={{
                            scale: 1.04,
                            boxShadow: "0 4px 24px 0 rgba(63,63,70,0.18)",
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <OptionButton
                            type="button"
                            onClick={() => toggleProblem(problem.value)}
                            $isSelected={selectedProblem === problem.value}
                          >
                            {problem.label}
                          </OptionButton>
                        </motion.div>
                      ))}
                    </ButtonContainer>
                  </>
                )}
                {step === 2 && (
                  <>
                    <FormField>
                      <Label htmlFor="firstName">Meno a priezvisko</Label>
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
                      />
                    </FormField>
                    
                    <FormField>
                      <Label htmlFor="email">Email</Label>
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
                      />
                    </FormField>
                    
                    <FormField>
                      <Label htmlFor="phone">Telefón</Label>
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
                      />
                    </FormField>
                    
                    <FormField>
                      <Label htmlFor="message">Správa (voliteľné)</Label>
                      <StyledTextarea
                        id="message"
                        value={formData.message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Napíšte nám o vašich potrebách alebo otázkach..."
                      />
                    </FormField>
                  </>
                )}


              </ContentContainer>
              
              {/* Action buttons fixed bottom */}
              <ActionContainer>
                {step === 1 && (
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "#f8f8f8", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <PrimaryButton 
                      onClick={handleNext}
                      disabled={!selectedProblem}
                    >
                      Pokračovať
                    </PrimaryButton>
                  </motion.div>
                )}
                {step === 2 && (
                  <ButtonRow>
                    <motion.div
                      whileHover={{ scale: 1.05, borderColor: "#ffffff", boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SecondaryButton onClick={() => setStep((prev) => prev - 1)}>
                        Späť
                      </SecondaryButton>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SendButton
                        onClick={() => {
                          // Set loading state
                          setIsSubmitting(true);
                          
                          // Simulate API call with setTimeout
                          setTimeout(() => {
                            // Handle form submission here
                            console.log('Form submitted:', { formData, selectedProblem });
                            
                            // Show success toast notification
                            showSuccessToast(
                              "Ďakujeme za vašu rezerváciu! Čoskoro vás budeme kontaktovať.", 
                              {
                                icon: <PartyPopper size={18} />,
                                duration: 5000,
                                description: `Vaša rezervácia pre ${selectedProblem} bola úspešne odoslaná. Kontaktujeme vás do 24 hodín.`,
                              }
                            );
                            
                            // Reset form and redirect to homepage after submission completes
                            setTimeout(() => {
                              setIsSubmitting(false);
                              // Reset form states first
                              setFormData({
                                firstName: "",
                                email: "",
                                phone: "",
                                message: "",
                              });
                              setSelectedProblem("");
                              
                              // Redirect to homepage
                              router.push('/');
                            }, 1000);
                          }, 1500); // Simulate network delay of 1.5 seconds
                        }}
                        loading={isSubmitting}
                        disabled={!formData.firstName || !formData.email || !formData.phone || isSubmitting}
                        type="submit"
                      >
                        Odoslať rezerváciu
                      </SendButton>
                    </motion.div>
                  </ButtonRow>
                )}
                {step === 3 && (
                  <ButtonRow>
                    <motion.div
                      whileHover={{ scale: 1.05, borderColor: "#ffffff", boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SecondaryButton onClick={() => setStep((prev) => prev - 1)}>
                        Späť
                      </SecondaryButton>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SendButton
                        onClick={() => {
                          // Set loading state
                          setIsSubmitting(true);
                          
                          // Simulate API call with setTimeout
                          setTimeout(() => {
                            // Handle form submission here
                            console.log('Form submitted:', { formData, selectedProblem });
                            
                            // Show success toast notification
                            showSuccessToast(
                              "Ďakujeme za vašu rezerváciu! Čoskoro vás budeme kontaktovať.", 
                              {
                                icon: <PartyPopper size={18} />,
                                duration: 5000,
                                description: `Vaša rezervácia pre ${selectedProblem} bola úspešne odoslaná. Kontaktujeme vás do 24 hodín.`,
                              }
                            );
                            
                            // Reset form and redirect to homepage after submission completes
                            setTimeout(() => {
                              setIsSubmitting(false);
                              // Reset form states first
                              setFormData({
                                firstName: "",
                                email: "",
                                phone: "",
                                message: "",
                              });
                              setSelectedProblem("");
                              
                              // Redirect to homepage
                              router.push('/');
                            }, 1000);
                          }, 1500); // Simulate network delay of 1.5 seconds
                        }}
                        loading={isSubmitting}
                        disabled={!formData.firstName || !formData.email || !formData.phone || isSubmitting}
                        type="submit"
                      >
                        Odoslať rezerváciu
                      </SendButton>
                    </motion.div>
                  </ButtonRow>
                )}

              </ActionContainer>
            </FormContainer>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <MainContainer>
      <div>
        {renderStep()}
      </div>
    </MainContainer>
  );
}
