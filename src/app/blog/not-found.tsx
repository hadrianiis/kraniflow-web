import Link from 'next/link';
import { Search, Home, ArrowLeft } from 'lucide-react';
import {
  Container,
  Content,
  IconContainer,
  IconWrapper,
  ErrorCode,
  ErrorTitle,
  ErrorDescription,
  ActionButtons,
  ActionButton,
  SuggestionsSection,
  SuggestionsTitle,
  SuggestionsGrid,
  SuggestionLink,
  SuggestionTitle,
  SuggestionDescription
} from './styles';

export default function BlogNotFound() {
  return (
    <Container>
      <Content>
        <IconContainer>
          <IconWrapper>
            <Search />
          </IconWrapper>
        </IconContainer>
        
        <ErrorCode>
          404
        </ErrorCode>
        
        <ErrorTitle>
          Článok nenájdený
        </ErrorTitle>
        
        <ErrorDescription>
          Bohužiaľ, článok ktorý hľadáte neexistuje alebo bol presunutý. 
          Skúste sa vrátiť na hlavnú stránku blogu alebo použiť vyhľadávanie.
        </ErrorDescription>

        <ActionButtons>
          <ActionButton href="/blog" className="primary">
            <ArrowLeft />
            Späť na blog
          </ActionButton>
          
          <ActionButton href="/" className="secondary">
            <Home />
            Domov
          </ActionButton>
        </ActionButtons>

        <SuggestionsSection>
          <SuggestionsTitle>
            Možno vás zaujme
          </SuggestionsTitle>
          
          <SuggestionsGrid>
            <SuggestionLink href="/blog/ako-zacat-investovat-s-malym-kapitalom">
              <SuggestionTitle>
                Ako začať investovať s malým kapitálom
              </SuggestionTitle>
              <SuggestionDescription>
                Praktický návod pre začiatočníkov
              </SuggestionDescription>
            </SuggestionLink>
            
            <SuggestionLink href="/blog/financna-nezavislost-myty-a-realita">
              <SuggestionTitle>
                Finančná nezávislosť: Mýty a realita
              </SuggestionTitle>
              <SuggestionDescription>
                Rozbíjame najčastejšie mýty
              </SuggestionDescription>
            </SuggestionLink>
          </SuggestionsGrid>
        </SuggestionsSection>
      </Content>
    </Container>
  );
} 