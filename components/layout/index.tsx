import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Header from "../header/header";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <Box position={"absolute"} top={"0"} zIndex={"-20"}>
        <Box position={"relative"} w={"100vw"} h={"100vh"}>
          <Image
            src={"/bg/Background.png"}
            alt={""}
            layout={"fill"}
            objectFit={"cover"}
          />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
