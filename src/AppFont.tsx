import styled from "@emotion/styled";
import { theme } from "./theme";

type AppFontProps = {
    fontSize: string;
  };
  
export const AppFont = styled.p<AppFontProps>(
    {
      color: theme.colors.black,
      fontFamily: theme.fonts.fontPlayfair,
    },
    props => ({
      fontSize: props.fontSize,
    })
  );