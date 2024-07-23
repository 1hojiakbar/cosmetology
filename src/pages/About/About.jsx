import aboutData from "../../utils/about";
import {
  AboutListData,
  AboutUs,
  Container,
  Content,
  OurBuilding,
} from "./style";

const About = () => {
  return (
    <Container>
      <Container.Title>Biz xaqimizda</Container.Title>
      <Content>
        <AboutUs>
          <AboutListData>
            {aboutData.map(({ id, title }) => {
              return (
                <AboutListData.ListItem key={id}>
                  {title}
                </AboutListData.ListItem>
              );
            })}
          </AboutListData>
        </AboutUs>
        <OurBuilding>
          <OurBuilding.Image>Bizning bino surati</OurBuilding.Image>
          <OurBuilding.Title>Bizning binoning surati</OurBuilding.Title>
        </OurBuilding>
      </Content>
    </Container>
  );
};

export default About;
