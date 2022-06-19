import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import WithNext from "../../components/layout/withNext";

const ShareBills = () => {
  const router = useRouter();
  return (
    <WithNext
      title={"Split Bill"}
      button={"Share Link"}
      besideButton={"Payment"}
      besideButtonClick={() => router.push("/share-bills/payment")}
    >
      <Text fontWeight={"bold"} fontSize={"xl"}>
        Apa Aja
      </Text>
      <Text>Rp.20000</Text>
      <Accordion mt={"5"} w={"full"}>
        <AccordionItem
          mt={2}
          w={"full"}
          backgroundColor={"white"}
          border={"1px solid rgba(59, 58, 239, 0.29)"}
          rounded={"lg"}
        >
          <AccordionButton w={"full"} justifyContent={"space-between"}>
            <Flex gap={3} align={"center"}>
              <Avatar src={"/avatar/avatar3.png"} />
              <Box>
                <Text fontSize={"xs"}>Nadya&lsquo;s total</Text>
                <Text fontWeight={"semibold"} fontSize={"lg"}>
                  Rp.50000
                </Text>
              </Box>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Divider
              shadow={"2xl"}
              color={"1px solid rgba(59, 58, 239, 0.29)"}
            />
            <Text fontWeight={"semibold"} fontSize={"xs"}>
              Bills Details
            </Text>
            <Flex mt={2}>
              <Text fontSize={"xs"}>+Fish & Chips</Text>
              <Spacer />
              <Text fontSize={"xs"}>x1</Text>
              <Spacer />
              <Text fontSize={"xs"}>Rp.50000</Text>
            </Flex>
            <Flex mt={2}>
              <Text fontSize={"xs"}>+Fish & Chips</Text>
              <Spacer />
              <Text fontSize={"xs"}>x1</Text>
              <Spacer />
              <Text fontSize={"xs"}>Rp.50000</Text>
            </Flex>
            <Flex mt={2}>
              <Text fontSize={"xs"}>+Fish & Chips</Text>
              <Spacer />
              <Text fontSize={"xs"}>x1</Text>
              <Spacer />
              <Text fontSize={"xs"}>Rp.50000</Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          mt={2}
          w={"full"}
          backgroundColor={"white"}
          border={"1px solid rgba(59, 58, 239, 0.29)"}
          rounded={"lg"}
        >
          <AccordionButton w={"full"} justifyContent={"space-between"}>
            <Flex gap={3} align={"center"}>
              <Avatar src={"/avatar/avatar3.png"} />
              <Box>
                <Text fontSize={"xs"}>Nadya&lsquo;s total</Text>
                <Text fontWeight={"semibold"} fontSize={"lg"}>
                  Rp.50000
                </Text>
              </Box>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Divider
              shadow={"2xl"}
              color={"1px solid rgba(59, 58, 239, 0.29)"}
            />
            <Text fontWeight={"semibold"} fontSize={"xs"}>
              Bills Details
            </Text>
            <Flex mt={2}>
              <Text fontSize={"xs"}>+Fish & Chips</Text>
              <Spacer />
              <Text fontSize={"xs"}>x1</Text>
              <Spacer />
              <Text fontSize={"xs"}>Rp.50000</Text>
            </Flex>
            <Flex mt={2}>
              <Text fontSize={"xs"}>+Fish & Chips</Text>
              <Spacer />
              <Text fontSize={"xs"}>x1</Text>
              <Spacer />
              <Text fontSize={"xs"}>Rp.50000</Text>
            </Flex>
            <Flex mt={2}>
              <Text fontSize={"xs"}>+Fish & Chips</Text>
              <Spacer />
              <Text fontSize={"xs"}>x1</Text>
              <Spacer />
              <Text fontSize={"xs"}>Rp.50000</Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </WithNext>
  );
};

export default ShareBills;
