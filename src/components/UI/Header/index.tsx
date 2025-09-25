'use client';

import OptimizedImage from '@/components/Common/OptimizedImage';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  MobileMenuOverlay,
  MobileMenuContent,
  MobileNav,
  MobileCallToActions,
} from './styles';
import UiverseButton from '@/components/UI/UiverseButton';
import MobileSendButton from '@/components/UI/MobileSendButton';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { HamburgerMenu } from '@/components';
import { useState } from 'react';
import { NAVIGATION_LINKS } from '@/lib/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Inner>
          <LogoContainer>
            <OptimizedImage 
              src="/kranioflow-logo-optimized.svg" 
              alt="Kranioflow Logo" 
              width={160} 
              height={160}
              priority
              placeholder="empty"
              quality={100}
            />
            <HamburgerMenu 
              isOpen={isOpen} 
              onToggle={handleToggle}
              size="md"
              color="white"
            />
            {/* Mobile Menu Overlay */}
            <MobileMenuOverlay $isOpen={isOpen}>
              <MobileMenuContent $isOpen={isOpen}>
                <MobileNav>
                  {NAVIGATION_LINKS.map((link, i) => (
                    <AnimatedLink 
                      key={i} 
                      title={link.label} 
                      url={link.url} 
                      onLinkClick={handleCloseMenu}
                      disableAnimation={true}
                    />
                  ))}
                </MobileNav>
                <MobileCallToActions $isOpen={isOpen}>
                  <MobileSendButton onClick={() => window.location.href = '/contact'}>
                    Kontakt
                  </MobileSendButton>
                </MobileCallToActions>
              </MobileMenuContent>
            </MobileMenuOverlay>
          </LogoContainer>
          <Nav>
            {NAVIGATION_LINKS.map((link, i) => (
              <AnimatedLink key={i} title={link.label} url={link.url} />
            ))}
          </Nav>
          <CallToActions>
            <UiverseButton href="/contact" padding="12px 24px">
              Kontakt
            </UiverseButton>
          </CallToActions>
        </Inner>
      </Wrapper>
    </>
  );
};

export default Header;
