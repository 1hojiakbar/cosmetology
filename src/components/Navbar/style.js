import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { Box } from "@mui/material";

const flex = css`
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  border: 1px solid blue;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const NavbarWrapper = styled.div`
  ${flex}
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  padding: 0 5% 0 5%;
  height: 95px;
  color: var(--lightColor);
  overflow: scroll;
  font-family: var(--mont);
  background: rgba(10, 9, 9, 0.9);
`;

export const Section = styled.div`
  ${flex}
  align-items: center;
  gap: ${({ gap }) => gap && gap};
`;

export const NavbarItem = styled(Link)`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  font-family: var(--mont);
  padding: 10px 18px;
  color: var(--lightColor);
  background: transparent;
  transition: all cubic-bezier(0.785, 0.135, 0.15, 0.86) 200ms;
  border-radius: 12px;
  &:hover {
    color: rgb(0, 0, 0);
    border-radius: 12px;
    background: rgb(255, 255, 255);
  }
  @media (max-width: 992px) {
    width: 90%;
  }
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 0.8px;
`;

export const SocialLink = styled.a`
  ${flex}
  align-items: center;
  text-decoration: none;
  color: var(--lightColor);
  padding: 0.55rem;
  border-radius: 50%;
  background: transparent;
  transition: all linear 250ms;
  &:hover {
    background: rgba(3, 255, 255, 0.2);
    transform: scale(1.08);
  }
`;

export const Body = styled.div`
  font-family: var(--mont);
  width: 100%;
`;

export const DrawerItem = styled(Box)`
  ${flex}
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-direction: column;
`;

export const Logo = styled.div`
  color: var(--lightColor);
  font-family: var(--mont);
  font-size: 24px;
  font-weight: 600;
`;
