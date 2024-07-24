import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-radius: 10px;
  padding: 50px 3% 20px 3%;
  background: rgb(255, 255, 255);
  @media (max-width: 992px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 90%;
    margin: 20px 0;
  }
`;

FormWrapper.Title = styled.h1`
  color: var(--blackColor);
  font-family: var(--mont);
  font-size: 2rem;
  font-weight: 500;
  line-height: 50px;
  text-align: center;
`;

FormWrapper.SubTitle = styled.p`
  color: var(--blackColor);
  font-family: var(--mont);
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 44px;
  text-align: center;
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 48px;
`;

export const BackToLink = styled(NavLink)`
  color: var(--blackColor);
  margin-top: 14px;
  font-family: var(--mont);
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: 1px underline rebeccapurple;
  }
`;
