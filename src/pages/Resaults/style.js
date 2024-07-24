import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 100px;
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
  align-items: center;
  justify-content: center;
  width: 90%;
  .carousel .control-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #135d66;
    opacity: 1;
    color: white;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    @media (max-width: 992px) {
      width: 60px;
      height: 60px;
    }
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
    @media (max-width: 400px) {
      width: 40px;
      height: 40px;
    }
    @media (max-width: 350px) {
      width: 30px;
      height: 30px;
    }
    &:hover {
      background: #134b70;
    }
  }

  .carousel .control-prev.control-arrow:before,
  .carousel .control-next.control-arrow:before {
    font-size: 30px;
    @media (max-width: 350px) {
      font-size: 12px;
    }
  }

  .carousel .control-prev {
    top: 40%;
    left: 15px;
  }

  .carousel .control-next {
    top: 40%;
    right: 15px;
  }
`;
