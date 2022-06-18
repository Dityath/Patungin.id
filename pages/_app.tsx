import { Box, ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Image from "next/image";
import Header from "../components/header/header";
import Layout from "../components/layout";

const fonts: object = {
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Hammersmith One', sans-serif",
  },
};

const customTheme: any = extendTheme({ ...theme, ...fonts });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
