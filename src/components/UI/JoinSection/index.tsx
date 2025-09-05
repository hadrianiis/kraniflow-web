'use client';
import { useState } from 'react';
import {
  Wrapper,
  Inner,
  Header,
  TestimonialWrapper,
  Testimonial,
  Testimony,
  UserInfo,
  Name,
  PaginationButtonContainer,
  Previous,
  Next,
} from './styles';
import { IconCircleChevronLeft, IconCircleChevronRight } from '@tabler/icons-react';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { Props, desktopHeaderPhrase, testimonials } from './constants';

const JoinSection = () => {
  const [testimonialsArr, setTestimonialsArr] = useState<Props[]>(testimonials);

  const next = () => {
    const newArr = [...testimonialsArr.slice(1), testimonialsArr[0]];
    setTestimonialsArr(newArr);
  };

  const previous = () => {
    const newArr = [
      ...testimonialsArr.slice(-1),
      ...testimonialsArr.slice(0, -1),
    ];
    setTestimonialsArr(newArr);
  };

  const isMobile = useIsMobile();

  const mappedTestimonials = isMobile
    ? testimonialsArr.slice(0, 1)
    : testimonialsArr.slice(0, 3);
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" align="center" />
        </Header>
        <TestimonialWrapper>
          {mappedTestimonials.map((t, i) => (
            <Testimonial key={i}>
              <Testimony>{t.testimony}</Testimony>
              <UserInfo>
                <Name>
                  <MaskText phrases={new Array(t.person)} tag="h3" align="left" />
                  <MaskText phrases={new Array('Spokojný klient')} tag="p" align="left" />
                </Name>
              </UserInfo>
            </Testimonial>
          ))}
        </TestimonialWrapper>
        <PaginationButtonContainer>
          <Previous onClick={previous}>
            <IconCircleChevronLeft size={50} />
          </Previous>
          <Next onClick={next}>
            <IconCircleChevronRight size={50} />
          </Next>
        </PaginationButtonContainer>
      </Inner>
    </Wrapper>
  );
};

export default JoinSection;
