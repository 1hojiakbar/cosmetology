import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  height: fit-content;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const BrandTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  margin-top: 140px;
  row-gap: 0.5rem;
  @media (max-width: 992px) {
    margin-top: 40px;
    width: 95%;
  }
`;

BrandTitleBox.Title = styled.div`
  color: var(--lightColor);
  font-family: var(--alata);
  width: 628.18px;
  font-size: 35px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 17px;
  text-shadow: 0 0 10px black;
  @media (max-width: 992px) {
    font-size: 32px;
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 26px;
  }
  @media (max-width: 567px) {
    font-size: 24px;
  }
`;

BrandTitleBox.Text = styled.small`
  display: block;
  color: var(--lightColor);
  font-family: var(--mont);
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 10px;
`;

BrandTitleBox.Slogan = styled.strong`
  color: var(--lightColor);
  font-family: var(--alata);
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  text-shadow: 0 4px 5px black;
  margin-bottom: 25px;
`;

export const BrandFaceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-top: 74px;
  padding: 0;
  height: max-content;
  transform: scale(1.14);
  user-select: none;
  @media (max-width: 992px) {
    margin-top: 50px;
    width: 80%;
    transform: scale(1.19);
  }
  @media (max-width: 768px) {
    margin-top: 100;
  }
  @media (max-width: 567px) {
    margin-top: 120px;
  }
`;

BrandFaceBox.Image = styled.img`
  width: 255px;
  height: 380px;
  margin-right: 30px;
  user-select: none;
  @media (max-width: 992px) {
    width: 50%;
    height: 500px;
  }
  @media (max-width: 930px) {
    width: 45%;
    margin-left: 20px;
  }
  @media (max-width: 750px) {
    width: 55%;
    margin-left: 30px;
  }
  @media (max-width: 599px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;
