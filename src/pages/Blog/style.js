import styled from "styled-components";

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

export const BlogDataWrapper = styled.div`
  display: grid;
  width: 100%;
  border-radius: 6px;
  padding: 38px 8px 38px 22px;
  background: rgba(0, 0, 0, 0.16);
  border: 0.5px solid rgb(255, 255, 255);
  row-gap: 2rem;
`;

export const BlogItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

BlogItem.Title = styled.strong`
  color: var(--lightColor);
  font-family: var(--mont);
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 567px) {
    font-size: 18px;
  }
`;

BlogItem.Text = styled.strong`
  color: var(--lightColor);
  font-family: var(--mont);
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  text-align: left;
  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 567px) {
    font-size: 18px;
  }
`;
