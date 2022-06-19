import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  HStack,
  Input,
  Radio,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AddAvatarIcon } from "../../components/icons";
import WithNext from "../../components/layout/withNext";
import { SplitBill } from "../../components/global/store";

const ChooseFriends = () => {
  return (
    <WithNext title={"Choose Friends"}>
      <Box w={"full"} as={"div"}>
        <HStack gap={2} w={"full"} overflowX={"scroll"}>
          <VStack as={"button"}>
            <AddAvatarIcon />
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              Add
            </Text>
          </VStack>
          <VStack>
            <Avatar src={"/avatar/avatar1.png"} />
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              User
            </Text>
          </VStack>
          <VStack>
            <Avatar src={"/avatar/avatar2.png"} />
            <Text fontWeight={"semibold"} fontSize={"sm"}>
              User
            </Text>
          </VStack>
        </HStack>
      </Box>
      <VStack mt={5} divider={<StackDivider color={"white"} shadow={"2xl"} />}>
        <Flex w={"full"}>
          <Box as={"div"}>
            <Text fontWeight={"semibold"}>Fish & Chips</Text>
            <Text fontWeight={"semibold"}>x1</Text>
          </Box>
          <Spacer />
          <Box as={"div"}>
            <Flex mt={2}>
              <Spacer />
              <Center
                border={"1px solid #3B3AEF"}
                as={"div"}
                rounded={"full"}
                overflow={"hidden"}
              >
                <Checkbox
                  // isChecked={false}
                  rounded={"full"}
                  colorScheme={"purple"}
                />
              </Center>
            </Flex>
            <Text mt={2} fontWeight={"semibold"} fontSize={"lg"}>
              Rp.50000
            </Text>
          </Box>
        </Flex>
        <Flex w={"full"}>
          <Box as={"div"}>
            <Text fontWeight={"semibold"}>Fish & Chips</Text>
            <Text fontWeight={"semibold"}>x1</Text>
          </Box>
          <Spacer />
          <Box as={"div"}>
            <Flex mt={2}>
              <Spacer />
              <Center
                border={"1px solid #3B3AEF"}
                as={"div"}
                rounded={"full"}
                overflow={"hidden"}
              >
                <Checkbox
                  // isChecked={false}
                  rounded={"full"}
                  colorScheme={"purple"}
                />
              </Center>
            </Flex>
            <Text mt={2} fontWeight={"semibold"} fontSize={"lg"}>
              Rp.50000
            </Text>
          </Box>
        </Flex>
        <Flex w={"full"}>
          <Box as={"div"}>
            <Text fontWeight={"semibold"}>Fish & Chips</Text>
            <Text fontWeight={"semibold"}>x1</Text>
            <AvatarGroup size="xs" max={2} mt={2}>
              <Avatar src={"/avatar/avatar2.png"} />
              <Avatar src={"/avatar/avatar1.png"} />
            </AvatarGroup>
          </Box>
          <Spacer />
          <Box as={"div"}>
            <Flex mt={2}>
              <Spacer />
              <Center
                border={"1px solid #3B3AEF"}
                as={"div"}
                rounded={"full"}
                overflow={"hidden"}
              >
                <Checkbox
                  // isChecked={false}
                  rounded={"full"}
                  colorScheme={"purple"}
                />
              </Center>
            </Flex>
            <Text mt={2} fontWeight={"semibold"} fontSize={"lg"}>
              Rp.50000
            </Text>
          </Box>
        </Flex>
        <Flex w={"full"}>
          <Box as={"div"}>
            <Text fontWeight={"semibold"}>Fish & Chips</Text>
            <Text fontWeight={"semibold"}>x1</Text>
            <AvatarGroup size="xs" max={2} mt={2}>
              <Avatar src={"/avatar/avatar3.png"} />
              <Avatar src={"/avatar/avatar1.png"} />
              <Avatar src={"/avatar/avatar1.png"} />
            </AvatarGroup>
          </Box>
          <Spacer />
          <Box as={"div"}>
            <Flex mt={2}>
              <Spacer />
              <Center
                border={"1px solid #3B3AEF"}
                as={"div"}
                rounded={"full"}
                overflow={"hidden"}
              >
                <Checkbox
                  // isChecked={false}
                  rounded={"full"}
                  colorScheme={"purple"}
                />
              </Center>
            </Flex>
            <Text mt={2} fontWeight={"semibold"} fontSize={"lg"}>
              Rp.50000
            </Text>
          </Box>
        </Flex>
      </VStack>
    </WithNext>
  );
};

export default ChooseFriends;
