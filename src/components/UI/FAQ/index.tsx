'use client';
import React, { useRef, useState } from 'react';
import { AnimatePresence, useInView, motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  Answer,
  Inner,
  Question,
  Wrapper,
} from './styles';
import { ChevronDown } from 'lucide-react';
import { MaskText } from '@/components';
import { 
  ANIMATION_VARIANTS, 
  FAQ_HEADER_PHRASES, 
  FAQ_DATA 
} from '@/lib/constants';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef, {
    once: true,
    margin: '-10%',
    amount: 0.4,
  });

  return (
    <Wrapper>
      <Inner>
        <div className="text-center mb-16">
          <MaskText 
            phrases={FAQ_HEADER_PHRASES.desktop} 
            tag="h1" 
            align="center" 
          />
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <Accordion ref={accordionRef}>
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              variants={ANIMATION_VARIANTS.fadeInUp}
              initial="initial"
              animate={isInView ? 'animate' : ''}
              custom={index}
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Question onClick={() => toggleItem(index)} className="p-6">
                <span className="flex-1">{item.question}</span>
                <div className={`transition-transform duration-300 ${openItem === index ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} color="currentColor" />
                </div>
              </Question>
              <AnimatePresence>
                {openItem === index && (
                  <Answer
                    as={motion.div}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    {item.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </Inner>
    </Wrapper>
  );
};

export default FAQ;
