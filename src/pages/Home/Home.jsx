import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/person.png";
import Button from "../../components/Button/Button";
import {
  BrandFaceBox,
  BrandTitleBox,
  Container,
  ContentWrapper,
} from "./style";

const Home = () => {
  const navigate = useNavigate();
  const query = useMediaQuery("(max-width:992px)");

  return (
    <Container>
      <ContentWrapper>
        <BrandTitleBox>
          <BrandTitleBox.Title>
            Kosmetolog — Latofat Nazarova go'zallik va salomatlik sirlari
          </BrandTitleBox.Title>
          <BrandTitleBox.Text>
            Bizning maqsad. - Ayollarni go'zalligi va teri salomatligini
            ta'minlash. Sifatli xizmatlarni taklif etish
          </BrandTitleBox.Text>
          <BrandTitleBox.Slogan>
            Go'zallik qurbonlikni emas, bilim olishni talab qiladi. Dunyoda
            xunuk ayolni bo'lmaydi, o'zini parvarish qilmagan ayollar bo'ladi.
          </BrandTitleBox.Slogan>
          <Button
            w="350px"
            h="70px"
            type="primary"
            onClick={() => navigate("/registration")}
          >
            Joyni band qilish
          </Button>
        </BrandTitleBox>
        <BrandFaceBox>
          <BrandFaceBox.Image src={image} alt="Image not found" />
        </BrandFaceBox>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
