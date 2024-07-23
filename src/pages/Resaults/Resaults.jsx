import React from "react";
import { Container, Content } from "./style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import resaultsCarouselData from "../../utils/resaults";

const Results = () => {
  return (
    <Container>
      <Container.Title>Natijalarimiz</Container.Title>
      <Content>
        <Carousel
          width="100%"
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
        >
          {resaultsCarouselData.map(({ id, img }) => {
            return (
              <div key={id}>
                <img src={img} alt="Image not found" />
              </div>
            );
          })}
        </Carousel>
      </Content>
    </Container>
  );
};

export default Results;
