import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  justify-content: space-between;
  width: 88%;
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AboutListData = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 196px;
`;

AboutListData.ListItem = styled.li`
  color: var(--lightColor);
  font-family: var(--mont);
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  @media (max-width: 800px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin: 12px 0;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const OurBuilding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 567px) {
    margin-top: 80px;
  }
  @media (max-width: 350px) {
    margin-top: 100px;
  }
`;

OurBuilding.Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  width: 328px;
  height: 196px;
  border-radius: 5px;
  box-shadow: 0px 4px 30px 4px rgba(191, 188, 188, 0.44);
  background: rgb(196, 196, 196);
  @media (max-width: 992px) {
    width: 100%;
    height: 220px;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

OurBuilding.Title = styled.p`
  color: var(--lightColor);
  font-family: var(--mont);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`;
