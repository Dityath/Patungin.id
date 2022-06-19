import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import React from "react";

type WithNextProps = {
  children: any;
  title: string;
  button?: string;
  besideButton?: string;
};

const WithNext = ({
  children,
  title,
  button,
  besideButton,
}: WithNextProps): JSX.Element => {
  const buttonText: string = button ? button : "Next";

  return (
    <Box
      h={"100%"}
      minH={"80vh"}
      display={"flex"}
      flexDir={"column"}
      position={"relative"}
      justifyContent={"space-between"}
    >
      <Box as={"div"}>
        <Text as={"h3"} fontSize={"md"} fontWeight={"semibold"}>
          {title}
        </Text>
        <Box mt={1}>{children}</Box>
      </Box>
      <Box position={"fixed"} bottom={6} w={"full"} bgColor={"white"}>
        <ButtonGroup>
          <Button colorScheme={"purple"} w={"90vw"}>
            {buttonText}
          </Button>
          {besideButton ? (
            <Button colorScheme={"purple"} w={"90vw"}>
              {besideButton}
            </Button>
          ) : (
            ""
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default WithNext;
