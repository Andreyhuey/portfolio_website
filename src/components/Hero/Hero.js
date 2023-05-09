import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Front End Web Developer with a passion for building aesthetically
        beautiful & functional web applications.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:andreyhuey777@gmail.com")}
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
