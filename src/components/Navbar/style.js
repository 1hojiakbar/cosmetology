import styled, { css } from "styled-components";
import { Link } from "react-scroll";

const flex = css`
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  `;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5% 0 5%;
  height: 95px;
  color: var(--lightColor);
  font-family: var(--mont);
  background: rgba(10, 9, 9, 0.5);
  `;

export const Section = styled.div`
  display: flex;
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
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 0.8px;
`;

export const SocialLink = styled.a`
  display: flex;
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
`;
