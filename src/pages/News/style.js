import styled from "styled-components";
import circleImage from "../../assets/images/circle.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 125px;
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
  align-items: center;
  width: 90%;
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  height: fit-content;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const NewsContent = styled.ul`
  display: grid;
  width: 100%;
  row-gap: 2rem;
  border-radius: 8px;
  height: max-content;
  height: 500px;
  padding: 38px 8px 38px 22px;
  background: rgba(2, 7, 17, 0.24);
  border: 0.5px solid rgb(130, 130, 130);
`;

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

NewsItem.Title = styled.strong`
  color: var(--lightColor);
  font-family: var(--alata);
  font-size: 22px;
  font-weight: 400;
  line-height: 40px;
  width: 100%;
`;

NewsItem.Text = styled.li`
  color: var(--lightColor);
  font-family: var(--mont);
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  margin-left: 10px;
  width: 100%;
  padding-top: 12px;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  height: fit-content;
  @media (max-width: 992px) {
    width: 100%;
    gap: 2rem;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-image: url(${circleImage});
`;

export const Time = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const MinuteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

MinuteWrapper.Time = styled.div`
  color: var(--blackColor);
  font-family: var(--alata);
  font-size: 30px;
  font-weight: 400;
  line-height: 55px;
  letter-spacing: 10px;
  padding-left: 10px;
`;

MinuteWrapper.Title = styled.div`
  color: var(--blackColor);
  font-family: var(--alata);
  font-size: 10px;
  font-weight: 400;
  line-height: 0px;
  letter-spacing: 1px;
  text-align: center;
`;

export const CenterDividerDot = styled.div`
  color: var(--blackColor);
  font-family: var(--alata);
  font-size: 30px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0;
`;
