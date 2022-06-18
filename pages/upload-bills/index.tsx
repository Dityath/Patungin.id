import { Box, Button, Text, Tooltip } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { NoPic } from "../../components/icons";

const UploadBills: NextPage = () => {
  return (
    <Box w={"full"} mt={14}>
      <Text
        as={"h3"}
        textAlign={"center"}
        fontWeight={"semibold"}
        fontSize={"xl"}
      >
        Split Bill
      </Text>
      <Box as={"div"} display={"flex"} justifyContent={"center"} mt={10}>
        <Tooltip label={"No Image"}>
          <Box
            as={"div"}
            maxW={72}
            maxH={72}
            w={"100vh"}
            h={"100vh"}
            bg={"rgba(255, 255, 255, 0.53)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            rounded={"30px"}
            shadow={"lg"}
            backdropBlur={"12px"}
          >
            <NoPic />
          </Box>
        </Tooltip>
      </Box>
      <Box
        w={"full"}
        display={"flex"}
        alignItems={"center"}
        flexDir={"column"}
        mt={20}
        gap={5}
      >
        <Button maxW={60} w={"full"} colorScheme={"purple"} size={"sm"}>
          Generate My Bill
        </Button>
        <Button
          variant={"link"}
          colorScheme={"purple"}
          textDecor={"underline"}
          size={"sm"}
        >
          Input My Bill Manually
        </Button>
      </Box>
    </Box>
  );
};

export default UploadBills;
