import { Box, Button, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      w={"full"}
      h={"96"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button colorScheme={"purple"} size={"sm"}>
        Split My Bill
      </Button>
    </Box>
  );
};

export default Home;
