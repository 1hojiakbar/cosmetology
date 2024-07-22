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
`;

export const BrandTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  margin-top: 140px;
  row-gap: 0.5rem;
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
  transform: scale(1.3);
  user-select: none;
`;

BrandFaceBox.Image = styled.img`
  width: 255px;
  height: 380px;
  margin-right: 30px;
  user-select: none;
`;

// export const Container = styled.div``;
