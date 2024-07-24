import { useState } from "react";
import newsData from "../../utils/news";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  CenterDividerDot,
  Container,
  Content,
  LeftContent,
  MinuteWrapper,
  NewsContent,
  NewsItem,
  RightContent,
  Time,
  TimeWrapper,
} from "./style";

const News = () => {
  const navigate = useNavigate();
  const date = new Date();
  const [time, setTime] = useState({
    minute: "",
    second: "",
  });

  const getSecond = () => {
    let dateMinute = date.getMinutes();
    let dateSecond = date.getSeconds();
    if (dateMinute < 10) {
      dateMinute = "0" + dateMinute;
    }
    if (dateSecond < 10) {
      dateSecond = "0" + dateSecond;
    }

    setTime({ minute: dateMinute, second: dateSecond });
  };

  setInterval(() => {
    getSecond();
  }, 1000);

  return (
    <Container>
      <Container.Title>Yangiliklar va aksiyalar</Container.Title>
      <Content>
        <LeftContent>
          <NewsContent>
            {newsData.map(({ id, title, text }) => {
              return (
                <NewsItem key={id}>
                  <NewsItem.Title>{title}</NewsItem.Title>
                  <NewsItem.Text>{text}</NewsItem.Text>
                </NewsItem>
              );
            })}
          </NewsContent>
        </LeftContent>
        <RightContent>
          <TimeWrapper>
            <Time>
              <MinuteWrapper>
                <MinuteWrapper.Time>{time.minute}</MinuteWrapper.Time>
                <MinuteWrapper.Title>minute</MinuteWrapper.Title>
              </MinuteWrapper>
              <CenterDividerDot>:</CenterDividerDot>
              <MinuteWrapper>
                <MinuteWrapper.Time>{time.second}</MinuteWrapper.Time>
                <MinuteWrapper.Title>second</MinuteWrapper.Title>
              </MinuteWrapper>
            </Time>
          </TimeWrapper>
          <Button
            type="primary"
            h={"80px"}
            size="medium"
            onClick={() => navigate("/registration")}
          >
            Joyni band qilish
          </Button>
        </RightContent>
      </Content>
    </Container>
  );
};

export default News;
