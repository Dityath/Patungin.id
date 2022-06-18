import { Box, Button, Text } from "@chakra-ui/react";
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
      <Link href={"/upload-bills"}>
        <Button colorScheme={"purple"} size={"sm"}>
          Split My Bill
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
