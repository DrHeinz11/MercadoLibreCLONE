import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  colors: {
    ml: {
      yellow: "#fff15a",
      grey: "#333",
      greyBg: "#efefef",
      greyAlpha: "#6c6a6a",
      blue: "#3483fa",
    },
  },
});
export default theme;
