import { ButtonWrapper } from "./style";

const Button = ({ children, w, size, h, type, onClick }) => (
  <ButtonWrapper w={w} h={h} type={type} size={size} onClick={onClick}>
    {children}
  </ButtonWrapper>
);

export default Button;
