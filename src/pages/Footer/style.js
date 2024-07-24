import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgb(21, 8, 48);
  height: fit-content;
  margin-top: 100px;
  /* overflow: scroll; */
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  justify-content: space-between;
  gap: 16px;
  height: 250px;
  padding: 32px 0;
  width: 90%;
  @media (max-width: 992px) {
    justify-content: flex-start;
    row-gap: 2rem;
    height: fit-content;
    grid-template-columns: 1fr;
  }
`;

export const Logo = styled.div`
  color: var(--lightColor);
  font-family: var(--mont);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  @media (max-width: 992px) {
    text-align: left;
  }
  @media (max-width: 990px) {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`;

export const FooterNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 547px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterNavColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const FooterLinkItem = styled(Link)`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  white-space: nowrap;
  font-family: var(--mont);
  padding: 10px 18px;
  color: var(--lightColor);
  background: transparent;
  transition: all cubic-bezier(0.785, 0.135, 0.15, 0.86) 200ms;
  border-radius: 12px;
  &:hover {
    text-decoration: 1px underline var(--lightColor);
  }
`;

export const SocialLinkWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 27px;
  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }
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

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 0.8px;
`;
