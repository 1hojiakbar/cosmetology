import { useContext } from "react";
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
import TemporaryDrawer from "./Drawer";
import menuIcon from "../../assets/icons/menu.svg";
import { Button, Drawer, useMediaQuery } from "@mui/material";
import { ToggleContext } from "../../context/DrawerContext";

const Navbar = () => {
  const { open, toggleOpen } = useContext(ToggleContext);
  const query = useMediaQuery("(max-width:992px)");

  return (
    <Container>
      <NavbarWrapper>
        <Section gap="20px">
          <h1>Logo</h1>
        </Section>
        {!query && (
          <Section gap="20px">
            {navbarData.map(({ id, title, path }) => {
              return (
                <NavbarItem key={id} to={path} smooth={true} duration={600}>
                  {title}
                </NavbarItem>
              );
            })}
          </Section>
        )}
        {!query && (
          <Section gap="27px">
            {socialSiteData.map(({ id, icon, link }) => {
              return (
                <SocialLink href={link} key={id}>
                  <Icon src={icon} />
                </SocialLink>
              );
            })}
          </Section>
        )}
        {query && (
          <Button onClick={() => toggleOpen(true)}>
            <Icon src={menuIcon} />
          </Button>
        )}
      </NavbarWrapper>
      <Body>
        <Outlet />
      </Body>
      <Drawer
        open={open}
        onClose={() => toggleOpen(false)}
        anchor="top"
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            height: "100vh",
            minHeight: "100vh",
            overflowY: "scroll",
          },
        }}
      >
        <TemporaryDrawer />
      </Drawer>
    </Container>
  );
};

export default Navbar;
