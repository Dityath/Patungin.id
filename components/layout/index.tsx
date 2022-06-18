import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../header/header";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll: any = () => {
    const position: number = window.scrollY;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    <>
      <Header bgColor={scroll > 28} />
      <Box as="main" px={5} w={"full"}>
        {children}
      </Box>
      <Box position={"fixed"} left={0} top={0} zIndex={"-20"}>
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
