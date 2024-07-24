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
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88%;
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
`;

export const OurBuilding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
