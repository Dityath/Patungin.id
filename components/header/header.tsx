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
      >
        <Box>
          <Heading as={"h1"} size={"xl"} textAlign={"center"}>
            PATUNGIN.ID
          </Heading>
          <Text
            textAlign={"center"}
            color={"rgba(1, 32, 76, 0.56)"}
            fontSize={"xx-small"}
            mt={"-1.5"}
          >
            Solusi cepat{" "}
            <Text as={"span"} color={"red"}>
              patungan
            </Text>{" "}
            tongkrongan anda
          </Text>
        </Box>
        <Button variant={"unstyled"}>
          <Hamburger />
        </Button>
      </Box>
    </HeaderStyle>
  );
};

export default Header;
