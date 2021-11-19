import React from "react";
import styled from "@emotion/styled";

const themeColors = {
  primary: "#43a047",
  secondary: "#ffb30033",
  white: "#ffffff",
  error: "#d32f2f",
  black: "#000000",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  title?: string;
  size?: "small" | "normal";
}
const StyledButton = styled.button<ButtonProps>`
  background-color: ${({backgroundColor}) =>
    backgroundColor || themeColors.primary};
  color: ${({color}) => color || themeColors.white};
  height: ${({size}) => (size === "small" ? "30px" : "36px")};
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  &: hover {
    filter: brightness(0.8);
  }
`;

const Button: React.FC<ButtonProps> = ({
  size,
  type,
  title,
  backgroundColor,
  color,
  ...rest
}) => {
  return (
    <StyledButton
      type={type || "button"}
      size={size || "normal"}
      backgroundColor={backgroundColor}
      color={color}
      {...rest}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
