import { Card, CardWrapper, Container, Content } from "./style";

const Services = () => {
  return (
    <Container>
      <Content>
        <Container.Title>Xizmatlarimiz</Container.Title>
        <CardWrapper>
          <Card>
            <Card.Image>1</Card.Image>
            <Card.Title>Terini parvarishlash</Card.Title>
          </Card>
          <Card>
            <Card.Image>2</Card.Image>
            <Card.Title>Estetik muolajalar</Card.Title>
          </Card>
          <Card>
            <Card.Image>3</Card.Image>
            <Card.Title>Lazer terapiyasi</Card.Title>
          </Card>
        </CardWrapper>
      </Content>
    </Container>
  );
};

export default Services;
