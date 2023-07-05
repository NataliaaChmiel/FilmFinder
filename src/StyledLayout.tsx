import styled from "@emotion/styled";
import { theme } from "./theme";

export const StyledLayout = styled.section ({
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    backgroundColor: theme.colors.blueMain,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "400px",
    minHeight: "100vh",
})