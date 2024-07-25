import { Box, Button } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { DrawerItem, Icon, Logo, NavbarItem, SocialLink } from "./style";
import navbarData, { socialSiteData } from "../../utils/navbar";
import { useContext } from "react";
import closeIcon from "../../assets/icons/close.svg";
import { ToggleContext } from "../../context/DrawerContext";
// import Button from "../Button/Button";

const TemporaryDrawer = () => {
  const { toggleOpen } = useContext(ToggleContext);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ width: "100%", height: "100vh" }}
      role="presentation"
      bgcolor={"#131842"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"white"}
        width={"90%"}
        height={"100px"}
      >
        <Logo>Logo</Logo>
        <Button variant="text" onClick={() => toggleOpen(false)}>
          <Icon src={closeIcon} />
        </Button>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ width: "100%", height: "100%" }}
        role="presentation"
      >
        <DrawerItem>
          {navbarData.map(({ id, title, path }) => {
            return (
              <NavbarItem key={id} to={path} smooth={true} duration={600}>
                {title}
              </NavbarItem>
            );
          })}
        </DrawerItem>
        <Divider />
        <DrawerItem>
          <Box display={"flex"} alignItems={"center"} mt={4} gap="27px">
            {socialSiteData.map(({ id, icon, link }) => {
              return (
                <SocialLink href={link} key={id}>
                  <Icon src={icon} />
                </SocialLink>
              );
            })}
          </Box>
        </DrawerItem>
      </Box>
    </Box>
  );
};

export default TemporaryDrawer;
