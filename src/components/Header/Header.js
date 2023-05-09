import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiTwotoneFileAdd } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/andreyhuey" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/oluwadara-ola-obaado-64b5511b4"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.canva.com/design/DAFJWu09t3I/mlFvECkax6VeY-fLxyxt_Q/view?utm_content=DAFJWu09t3I&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
        target="_blank"
      >
        <AiTwotoneFileAdd size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
