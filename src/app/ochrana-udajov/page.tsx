"use client"

import styled from "styled-components"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ochrana údajov | Kranioflow | Kraniosakrálna terapia',
  description: 'Zásady ochrany osobných údajov - informácie o spracovaní a ochrane vašich osobných údajov v súlade s GDPR.',
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #469F9D;
  text-align: center;
  border-bottom: 3px solid #469F9D;
  padding-bottom: 1rem;
`

const Section = styled.section`
  margin-bottom: 2.5rem;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #469F9D;
  border-left: 4px solid #469F9D;
  padding-left: 1rem;
`

const Paragraph = styled.p`
  margin-bottom: 1rem;
  text-align: justify;
`

const List = styled.ul`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`

const ContactInfo = styled.div`
  background-color: rgba(70, 159, 157, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #469F9D;
  margin: 1rem 0;
`

const PlaceholderText = styled.span`
  background-color: #e9ecef;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-style: italic;
  color: #6c757d;
`

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <Title>Zásady ochrany osobných údajov</Title>

      <Paragraph>
        Tieto Zásady ochrany osobných údajov vysvetľujú, akým spôsobom spracúvame a chránime osobné údaje, ktoré nám
        poskytujete prostredníctvom kontaktného formulára na tejto webovej stránke.
      </Paragraph>

      <Section>
        <SectionTitle>1. Prevádzkovateľ osobných údajov</SectionTitle>
        <Paragraph>Prevádzkovateľom osobných údajov je:</Paragraph>
        <ContactInfo>
          <PlaceholderText>[Názov/meno prevádzkovateľa]</PlaceholderText>
          <br />
          <PlaceholderText>[Adresa sídla alebo bydliska]</PlaceholderText>
          <br />
          <PlaceholderText>[E-mail / Telefón]</PlaceholderText>
        </ContactInfo>
      </Section>

      <Section>
        <SectionTitle>2. Aké údaje spracúvame</SectionTitle>
        <Paragraph>
          Prostredníctvom kontaktného formulára spracúvame výhradne údaje, ktoré dobrovoľne poskytnete:
        </Paragraph>
        <List>
          <ListItem>meno a priezvisko</ListItem>
          <ListItem>e-mailová adresa</ListItem>
          <ListItem>telefónne číslo (ak ho uvediete)</ListItem>
          <ListItem>obsah správy</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. Účel spracúvania</SectionTitle>
        <Paragraph>Vaše osobné údaje spracúvame iba na tieto účely:</Paragraph>
        <List>
          <ListItem>odpovedanie na vašu správu alebo dopyt,</ListItem>
          <ListItem>vedenie komunikácie súvisiacej s vašou požiadavkou,</ListItem>
          <ListItem>plnenie zákonných povinností vyplývajúcich z právnych predpisov.</ListItem>
        </List>
        <Paragraph>Údaje nepoužívame na marketingové alebo iné účely bez vášho predchádzajúceho súhlasu.</Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Právny základ spracúvania</SectionTitle>
        <Paragraph>Osobné údaje spracúvame na základe:</Paragraph>
        <List>
          <ListItem>
            čl. 6 ods. 1 písm. b) GDPR – spracúvanie je nevyhnutné na plnenie zmluvy alebo predzmluvných opatrení,
          </ListItem>
          <ListItem>čl. 6 ods. 1 písm. c) GDPR – splnenie zákonnej povinnosti prevádzkovateľa,</ListItem>
          <ListItem>
            čl. 6 ods. 1 písm. f) GDPR – oprávnený záujem prevádzkovateľa (komunikácia s používateľmi).
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>5. Doba uchovávania</SectionTitle>
        <Paragraph>
          Osobné údaje uchovávame len po dobu potrebnú na vybavenie vašej požiadavky, prípadne po dobu vyžadovanú
          právnymi predpismi. Po uplynutí tejto lehoty budú údaje bezpečne vymazané.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Príjemcovia údajov</SectionTitle>
        <Paragraph>
          Vaše osobné údaje neposkytujeme žiadnym tretím stranám, s výnimkou prípadov, keď to vyžaduje zákon alebo
          oprávnená požiadavka orgánu verejnej moci.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Vaše práva</SectionTitle>
        <Paragraph>V súlade s GDPR máte právo:</Paragraph>
        <List>
          <ListItem>na prístup k svojim osobným údajom,</ListItem>
          <ListItem>na opravu nepresných alebo neúplných údajov,</ListItem>
          <ListItem>na vymazanie údajov („právo byť zabudnutý"),</ListItem>
          <ListItem>na obmedzenie spracúvania,</ListItem>
          <ListItem>na prenosnosť údajov,</ListItem>
          <ListItem>namietať proti spracúvaniu,</ListItem>
          <ListItem>podať sťažnosť na Úrad na ochranu osobných údajov SR.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>8. Bezpečnosť údajov</SectionTitle>
        <Paragraph>
          Prijímame primerané technické a organizačné opatrenia na ochranu osobných údajov pred stratou, zneužitím alebo
          neoprávneným prístupom.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Kontakt</SectionTitle>
        <Paragraph>
          Ak máte otázky týkajúce sa spracúvania vašich osobných údajov alebo si želáte uplatniť svoje práva,
          kontaktujte nás na:
        </Paragraph>
        <ContactInfo>
          <PlaceholderText>[E-mailová adresa]</PlaceholderText>
          <br />
          <PlaceholderText>[Telefónne číslo]</PlaceholderText>
        </ContactInfo>
      </Section>
    </Container>
  )
}