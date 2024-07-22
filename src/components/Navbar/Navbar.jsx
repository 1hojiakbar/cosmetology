import React from "react";
import { Outlet } from "react-router-dom";
import navbarData, { socialSiteData } from "../../utils/navbar";
import {
  Body,
  Container,
  Icon,
  NavbarItem,
  NavbarWrapper,
  Section,
  SocialLink,
} from "./style";

const Navbar = () => {
  return (
    <Container>
      <NavbarWrapper>
        <Section gap="20px">
          <h1>Logo</h1>
          <h1>Logo</h1>
        </Section>
        <Section gap="20px">
          {navbarData.map(({ id, title, path }) => {
            return (
              <NavbarItem key={id} to={path}>
                {title}
              </NavbarItem>
            );
          })}
        </Section>
        <Section gap="27px">
          {socialSiteData.map(({ id, icon, link }) => {
            return (
              <SocialLink href={link} key={id}>
                <Icon src={icon} />
              </SocialLink>
            );
          })}
        </Section>
      </NavbarWrapper>
      <Body>
        <Outlet />
      </Body>
    </Container>
  );
};

export default Navbar;
