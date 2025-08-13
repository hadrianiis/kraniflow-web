'use client';
import {
  Wrapper,
  Inner,
  Header,
  FeaturesGrid,
  FeatureCard,
  IconContainer,
  FeatureTitle,
  FeatureDescription,
  HoverOverlay,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  features,
} from './constants';
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

const iconMap = {
  IconTerminal2: IconTerminal2,
  IconEaseInOut: IconEaseInOut,
  IconCurrencyDollar: IconCurrencyDollar,
  IconCloud: IconCloud,
  IconRouteAltLeft: IconRouteAltLeft,
  IconHelp: IconHelp,
  IconAdjustmentsBolt: IconAdjustmentsBolt,
  IconHeart: IconHeart,
};

const OffersSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />
          {isMobile ? (
            <MaskText phrases={mobileParagraphPhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" />
          )}
        </Header>
        
        <FeaturesGrid>
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName as keyof typeof iconMap];
            return (
              <FeatureCard key={feature.title} index={index}>
                <HoverOverlay index={index} className="hover-overlay" />
                <IconContainer>
                  {IconComponent && <IconComponent />}
                </IconContainer>
                <FeatureTitle index={index} className="feature-title">
                  <span>{feature.title}</span>
                </FeatureTitle>
                <FeatureDescription>
                  {feature.description}
                </FeatureDescription>
              </FeatureCard>
            );
          })}
        </FeaturesGrid>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
