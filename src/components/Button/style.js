import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "primary":
      return {
        background: "var(--primaryBgButtonColor)",
        color: "var(----blackColor)",
      };
    case "secondary":
      return {
        background: "var(--secondaryBgButtonColor)",
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
  cursor: pointer;
  width: ${({ w }) => (w ? w : "100%")};
  height: ${({ h }) => (h ? h : "85px")};
  ${getType};
`;
