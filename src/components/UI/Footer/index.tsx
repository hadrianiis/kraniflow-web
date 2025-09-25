'use client';

import OptimizedImage from '@/components/Common/OptimizedImage';
import Link from 'next/link';
// Static image paths
const qr_kontakt = '/svgs/qr-kontakt.png';

const centerLinks = [
  { name: 'Domov', href: '/' },
  { name: 'O mne', href: '/about' },
  { name: 'O terapii', href: '/terapia' },
];

const rightLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Kontakt', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

import {
  Wrapper,
  Inner,
  FooterMainContent,
  FooterMiddle,
  LeftSection,
  QRContainer,
  QRImageCtn,
  TextCtn,
  CenterSection,
  RightSection,
  LinksContainer,
  MobileNavContainer,
  MobileLinksContainer,
  FooterBottom,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <FooterMiddle>
            {/* Left Section - QR Code */}
            <LeftSection>
              <QRContainer>
                <QRImageCtn>
                  <OptimizedImage 
                    src={qr_kontakt} 
                    alt="QR kód pre kontakt a rezerváciu termínu" 
                    width={120} 
                    height={120}
                    priority
                  />
                </QRImageCtn>
                <TextCtn>
                  <p>Naskenujte pre kontakt a rezerváciu termínu.</p>
                </TextCtn>
              </QRContainer>
            </LeftSection>

            {/* Center Section - Main Navigation */}
            <CenterSection>
              <LinksContainer>
                {centerLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </LinksContainer>
            </CenterSection>

            {/* Right Section - Additional Navigation */}
            <RightSection>
              <LinksContainer>
                {rightLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </LinksContainer>
            </RightSection>

            {/* Mobile Navigation - Hidden on desktop */}
            <MobileNavContainer>
              <MobileLinksContainer>
                {centerLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </MobileLinksContainer>
              <MobileLinksContainer>
                {rightLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </MobileLinksContainer>
            </MobileNavContainer>
          </FooterMiddle>
          
          <FooterBottom>
            <CopyRight>
              ©Kranioflow
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
