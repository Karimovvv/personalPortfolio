import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        The main purpose of mine to get more experience with new team also I should mention that I have to achieve more knowledge about developing sphere. I can help you improve your web sites.I hope You will love it.
      </SectionText>
      <Button onClick={() =>window.location = 'https://www.visualcv.com/app/cvs/8016472/appearance'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;