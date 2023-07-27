import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='technologies'>
    <SectionDivider/>
     <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I have worked with small companies as a front-end developer and I have practice with back-end also I've worked with figma tools.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3.5rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.Js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3.5rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3.5rem'/>
        <ListContainer>
          <ListTitle>Designs</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma tools
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
   
  </Section>
);

export default Technologies;
