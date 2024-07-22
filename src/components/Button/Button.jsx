import { ButtonWrapper } from "./style";

const Button = ({ children, w, h, type }) => (
  <ButtonWrapper w={w} h={h} type={type}>
    {children}
  </ButtonWrapper>
);

export default Button;
