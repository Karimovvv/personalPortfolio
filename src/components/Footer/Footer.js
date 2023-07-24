import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
      <LinkColumn>
       <LinkTitle>Call</LinkTitle>
       <LinkItem href='tel:+821035214155'>+821035214155</LinkItem>
      </LinkColumn>
      <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem href='mailto:mmysterious81@gmail.com'>mmysterious81@gmail.com</LinkItem>
      </LinkColumn>
     </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating 'Real Estate' project at a time</Slogan>
      </CompanyContainer>
      <SocialIcons href='https://github.com/'>
      <AiFillGithub size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://www.instagram.com/'>
      <AiFillInstagram size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/'>
      <AiFillLinkedin size='3rem'/>
    </SocialIcons>
      </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
