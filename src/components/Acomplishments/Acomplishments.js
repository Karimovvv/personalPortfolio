import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Personal Projects'},
  { number: 100, text: 'Global friends', },
  { number: 50, text: 'Github Followers', },
  { number: 50, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    
    <SectionTitle>Personal Achievements</SectionTitle>
    <br />
    <SectionDivider/>
  
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
