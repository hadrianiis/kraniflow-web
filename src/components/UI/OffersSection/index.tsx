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
  IconClockCheck,
  IconHeartHandshake,
  IconPlant2,
  IconMoodKid,
  IconUserBolt,
  IconBrain,
  IconBabyCarriage,
  IconBandage,
} from "@tabler/icons-react";

const iconMap = {
  IconBandage: IconBandage,
  IconHeartHandshake: IconHeartHandshake,
  IconUserBolt: IconUserBolt,
  IconBabyCarriage: IconBabyCarriage,
  IconMoodKid: IconMoodKid,
  IconPlant2: IconPlant2,
  IconClockCheck: IconClockCheck,
  IconBrain: IconBrain,
};

const OffersSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" align="center" />
          {isMobile ? (
            <MaskText phrases={mobileParagraphPhrase} tag="p" align="center" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" align="center" />
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
