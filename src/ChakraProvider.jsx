import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // Define your color palette here
  colors: {
    sidebarBackground: "#015249",
    buttonGradientBackground: "linear-gradient(135deg, #57BC90, #004B40)",
    green400: "#015249",
    green500: "#57BC90",
    green600: "#39B54A",
    green700: "#043933",
    red500: "#D80000",
    gray500: "#5A5F65",
    grayBg: "#F3F3F3",
  },
});

const Chakra = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default Chakra;
