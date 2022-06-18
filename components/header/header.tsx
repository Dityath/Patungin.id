import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { HeaderStyle } from "../../styles";
import { Hamburger } from "../icons";

const Header = () => {
  return (
    <HeaderStyle>
      <Box
        w={"full"}
        maxW={"lg"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        userSelect={"none"}
      >
        <Button variant={"unstyled"}>
          <Hamburger />
        </Button>
        <Box>
          <Heading as={"h1"} size={"xl"} textAlign={"center"}>
            PATUNGIN.ID
          </Heading>
          <Heading
            as={"h2"}
            textAlign={"center"}
            color={"rgba(1, 32, 76, 0.56)"}
            fontSize={"xx-small"}
            mt={"-1.5"}
            fontWeight={"medium"}
          >
            Solusi cepat{" "}
            <Text as={"span"} color={"red"}>
              patungan
            </Text>{" "}
            tongkrongan anda
          </Heading>
        </Box>
        <Box mr={"10"} />
      </Box>
    </HeaderStyle>
  );
};

export default Header;
