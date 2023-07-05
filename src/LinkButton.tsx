import { To, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "./theme";

export const RoundedButton = styled.button({
  display: "block",
  margin: "0 auto",
  marginBottom: "2em",
  borderRadius: "30px",
  borderColor: theme.colors.orangeButton,
  width: "10em",
  padding: "1em",
  fontFamily: theme.fonts.fontMontserrat,
  fontSize: "1em",
  backgroundColor: theme.colors.orangeButton,
  color: theme.colors.white,
  boxShadow: "2px 7px 42px -1px rgba(183, 177, 167, 1)",
});

type LinkButtonProps = {
  to: To;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function StyledLinkButton({ to, children, ...rest }: LinkButtonProps) {
  const navigate = useNavigate();

  return (
    <RoundedButton onClick={() => navigate(to)} {...rest}>
      {children}
    </RoundedButton>
  );
}

export function LinkButton({ to, children, ...rest }: LinkButtonProps) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} {...rest}>
      {children}
    </button>
  );
}
