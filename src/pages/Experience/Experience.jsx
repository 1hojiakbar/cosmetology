import React from "react";
import { Container, Content, Item } from "./style";
import experienceData from "../../utils/experience";

const Experience = () => {
  return (
    <Container>
      <Container.Title>Malaka</Container.Title>
      <Content>
        {experienceData.map(({ id, title }) => {
          return (
            <Item key={id}>
              <Item.Text>{title}</Item.Text>
            </Item>
          );
        })}
      </Content>
    </Container>
  );
};

export default Experience;
