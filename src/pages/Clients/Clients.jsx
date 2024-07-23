import React from "react";
import { Card, CardWrapper, Container, Content } from "./style";

const Clients = () => {
  return (
    <Container>
      <Container.Title>Mijozlar sharhlari</Container.Title>
      <Content>
        <CardWrapper>
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
        </CardWrapper>
      </Content>
    </Container>
  );
};

export default Clients;
