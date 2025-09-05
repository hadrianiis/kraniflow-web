'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  MobileMenuOverlay,
  MobileMenuContent,
  MobileNav,
  MobileCallToActions,
} from './styles';
import raft_logo from '../../../../public/svgs/raft_logo.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { HamburgerMenu } from '@/components';
import { useState } from 'react';
import { links } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <Inner>
          <LogoContainer>
            <Image 
              src="/logo-kranio.svg" 
              alt="Kranio Logo" 
              width={100} 
              height={100}
              priority
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
                  {links.map((link, i) => (
                    <AnimatedLink key={i} title={link.linkTo} url={link.url} />
                  ))}
                </MobileNav>
                <MobileCallToActions $isOpen={isOpen}>
                  <GetStartedButton padding="10px 20px" />
                </MobileCallToActions>
              </MobileMenuContent>
            </MobileMenuOverlay>
          </LogoContainer>
          <Nav>
            {links.map((link, i) => (
              <AnimatedLink key={i} title={link.linkTo} url={link.url} />
            ))}
          </Nav>
          <CallToActions>
            <GetStartedButton padding="12px 24px" />
          </CallToActions>
        </Inner>
      </Wrapper>
    </>
  );
};

export default Header;
