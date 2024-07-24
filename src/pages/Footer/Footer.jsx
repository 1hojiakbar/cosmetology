import React from "react";
import {
  Container,
  FooterContent,
  FooterLinkItem,
  FooterNav,
  FooterNavColumn,
  Icon,
  Logo,
  SocialLink,
  SocialLinkWrapper,
} from "./style";
import { socialSiteData } from "../../utils/navbar";
import pagesData from "../../utils/pages";

const Footer = () => {
  return (
    <Container>
      <FooterContent>
        <Logo>Logo</Logo>
        <FooterNav>
          <FooterNavColumn>
            {pagesData.map(({ id, title, col, name }) => {
              return (
                title &&
                col == 1 && (
                  <FooterLinkItem
                    key={id}
                    to={name}
                    smooth={true}
                    duration={600}
                  >
                    {title}
                  </FooterLinkItem>
                )
              );
            })}
          </FooterNavColumn>
          <FooterNavColumn>
            {pagesData.map(({ id, title, col, name }) => {
              return (
                title &&
                col == 2 && (
                  <FooterLinkItem
                    key={id}
                    to={name}
                    smooth={true}
                    duration={600}
                  >
                    {title}
                  </FooterLinkItem>
                )
              );
            })}
          </FooterNavColumn>
        </FooterNav>
        <SocialLinkWrapper>
          {socialSiteData.map(({ id, icon, link }) => {
            return (
              <SocialLink href={link} key={id}>
                <Icon src={icon} />
              </SocialLink>
            );
          })}
        </SocialLinkWrapper>
      </FooterContent>
    </Container>
  );
};

export default Footer;
