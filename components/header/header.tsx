import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Hamburger } from "../icons";

type HeaderProps = {
  bgColor?: boolean;
};

const Header = ({ bgColor }: HeaderProps) => {
  return (
    <Center
      w={"full"}
      h={20}
      px={"5"}
      position={"sticky"}
      top={0}
      backdropFilter={"auto"}
      backdropBlur={bgColor ? "12px" : ""}
      zIndex={20}
      transition={"all 0.3s"}
    >
      <Flex
        w={"full"}
        maxW={"lg"}
        justifyContent={"space-between"}
        alignItems={"center"}
        userSelect={"none"}
      >
        <Button variant={"unstyled"}></Button>
        <Spacer />
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
        <Spacer mr={10} />
      </Flex>
    </Center>
  );
};

export default Header;
