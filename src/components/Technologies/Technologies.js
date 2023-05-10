import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  LinkContainer,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Design to Technical & Non-Technical Web Development
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"} />
        <ListContainer>
          <ListTitle>Front End Tools</ListTitle>
          <ListParagraph>
            Experience with React.js, Next.js, Redux & WordPress
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={"3rem"} />
        <ListContainer>
          <ListTitle>CSS Libraries</ListTitle>
          <ListParagraph>
            Experience with Bootstrap, TailwindCss & Styled Components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={"3rem"} />
        <ListContainer>
          <ListTitle>APIs</ListTitle>
          <ListParagraph>
            Experience with RapidAPI, Marvel API & AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </section>
);

export default Technologies;
