import { ButtonWrapper } from "./style";

const Button = ({ children, w, size, h, type, onClick, disabled }) => (
  <ButtonWrapper
    w={w}
    h={h}
    type={type}
    size={size}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </ButtonWrapper>
);

export default Button;
