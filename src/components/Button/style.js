import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "primary":
      return {
        background: "var(--primaryBgButtonColor)",
        color: "var(----blackColor)",
        border: "3px solid var(--primaryBgButtonColor)",
      };
    case "secondary":
      return {
        background: "var(--secondaryBgButtonColor)",
        color: "var(--lightColor)",
      };
  }
};

const moveHover = ({ type }) => {
  if (type == "primary") {
    return {
      background: "transparent",
      textShadow: "1px 1px 20px var(--lightColor)",
      border: "3px solid var(--primaryBgButtonColor)",
      color: "var(--lightColor)",
    };
  }
};

export const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  font-family: var(--alata);
  font-size: 26px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: center;
  border-radius: 12px;
  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 150ms;
  cursor: pointer;
  width: ${({ w }) => (w ? w : "100%")};
  height: ${({ h }) => (h ? h : "85px")};
  ${getType};
  &:hover {
    ${moveHover}
  }
`;
