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
import { useIsMobile } from '@/lib/useIsMobile';
import { 
  OFFERS_HEADER_PHRASES, 
  OFFERS_DESCRIPTION_PHRASES, 
  FEATURES 
} from '@/lib/constants';
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
          <MaskText phrases={OFFERS_HEADER_PHRASES.desktop} tag="h1" align="center" />
          <MaskText 
            phrases={isMobile ? OFFERS_DESCRIPTION_PHRASES.mobile : OFFERS_DESCRIPTION_PHRASES.desktop} 
            tag="p" 
            align="center" 
          />
        </Header>
        
        <FeaturesGrid>
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName as keyof typeof iconMap];
            return (
              <FeatureCard key={feature.id} $index={index}>
                <HoverOverlay $index={index} className="hover-overlay" />
                <IconContainer>
                  {IconComponent && <IconComponent />}
                </IconContainer>
                <FeatureTitle $index={index} className="feature-title">
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
