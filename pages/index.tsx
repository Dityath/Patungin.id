import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box
      w={"full"}
      h={"96"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VStack textAlign={"center"} gap={5}>
        <Heading color={"#211C70"}>
          Solusi cepat <br />
          <Text as={"span"} color={"#DB4D4D"}>
            patungan
          </Text>
          <br />
          tongkrongan anda
        </Heading>
        <Link href={"/upload-bills"}>
          <Button colorScheme={"purple"} size={"lg"}>
            Split My Bill
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Home;
