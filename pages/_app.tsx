import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const fonts: object = {
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "mono, monospace",
  },
};

const customTheme: any = extendTheme({ ...theme, ...fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
