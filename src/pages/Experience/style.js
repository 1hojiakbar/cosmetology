import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
  @media (max-width: 992px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 26px;
  }
  @media (max-width: 567px) {
    font-size: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  gap: 20px;
`;

export const Item = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 50px;
  width: 100%;
  height: 90px;
  border: 0.5px solid rgb(255, 255, 255);
  border-radius: 10px;
  transition: all 200ms;
  background: rgba(2, 7, 17, 0.24);
  &:hover {
    border: 0.5px solid transparent;
  }
  @media (max-width: 992px) {
    padding-right: 10px;
  }
  @media (max-width: 567px) {
    height: fit-content;
    padding: 12px 28px;
  }
`;

Item.Text = styled.li`
  color: var(--lightColor);
  font-family: var(--mont);
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 567px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
