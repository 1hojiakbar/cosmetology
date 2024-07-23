import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 125px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const CardWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 250px;
  padding: 20px;
  width: 100%;
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

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgb(196, 196, 196);
`;
