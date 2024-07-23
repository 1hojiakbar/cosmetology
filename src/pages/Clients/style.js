import styled from "styled-components";
import cardWrapperImage from "../../assets/images/card-bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 100px;
`;

Container.Title = styled.div`
  color: var(--lightColor);
  font-family: var(--alata);
  font-size: 36px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 24px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const CardWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 32px 35px;
  justify-content: space-between;
  grid-template-columns: 260px 260px 260px;
  grid-template-rows: 380px;
  background-image: url(${cardWrapperImage});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 0px 100px 1px rgba(211, 211, 211, 0.4);
  background: rgb(162, 162, 162);
`;
