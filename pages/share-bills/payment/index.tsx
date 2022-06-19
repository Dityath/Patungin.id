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
  FormLabel,
  Input,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {
  DestinationAccountNumber,
  DestinationBankIcon,
} from "../../../components/icons";
import WithNext from "../../../components/layout/withNext";

const Payment = () => {
  return (
    <WithNext title={""}>
      <Accordion mt={"5"} w={"full"} allowToggle>
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
      <Box
        backgroundColor={"white"}
        border={"1px solid rgba(59, 58, 239, 0.29)"}
        rounded={"lg"}
        mt={"5"}
        p={2}
      >
        <FormLabel>Destination Bank</FormLabel>
        <Flex align={"center"} gap={5}>
          <DestinationBankIcon />
          <Box w={"full"}>
            <Select variant={"flushed"}>
              <option>Bank BRI</option>
              <option>Bank BRI</option>
              <option>Bank BRI</option>
            </Select>
          </Box>
        </Flex>
        <FormLabel mt={5}>Destination Account Number </FormLabel>
        <Flex align={"center"} gap={5}>
          <DestinationAccountNumber />
          <Box w={"full"}>
            <Input
              variant={"flushed"}
              placeholder={"Input Your Account Number"}
            />
          </Box>
        </Flex>
      </Box>
      <Accordion mb={20} mt={"5"} w={"full"} allowToggle>
        <AccordionItem
          mt={2}
          w={"full"}
          backgroundColor={"white"}
          border={"1px solid rgba(59, 58, 239, 0.29)"}
          rounded={"lg"}
        >
          <AccordionButton w={"full"} justifyContent={"space-between"}>
            <Flex gap={3} align={"center"}>
              <Box>
                <Text fontSize={"xs"}>Bank Transfer (Virtual Account)</Text>
              </Box>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Flex mt={2} gap={2}>
              <Box w={10} h={5} position={"relative"}>
                <Image
                  src={"/bank/bank_bri.png"}
                  alt={""}
                  layout={"fill"}
                  objectFit={"scale-down"}
                />
              </Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                Bank BRI
              </Text>
            </Flex>
            <Flex mt={2} gap={2}>
              <Box w={10} h={5} position={"relative"}>
                <Image
                  src={"/bank/bank_mandiri.png"}
                  alt={""}
                  layout={"fill"}
                  objectFit={"scale-down"}
                />
              </Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                Bank Mandiri
              </Text>
            </Flex>
            <Flex mt={2} gap={2}>
              <Box w={10} h={5} position={"relative"}>
                <Image
                  src={"/bank/bank_sahabat.png"}
                  alt={""}
                  layout={"fill"}
                  objectFit={"scale-down"}
                />
              </Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                Bank Sahabat
              </Text>
            </Flex>
            <Flex mt={2} gap={2}>
              <Box w={10} h={5} position={"relative"}>
                <Image
                  src={"/bank/bank_cimb.png"}
                  alt={""}
                  layout={"fill"}
                  objectFit={"scale-down"}
                />
              </Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                Bank CIMB Niaga
              </Text>
            </Flex>
            <Flex mt={2} gap={2}>
              <Box w={10} h={5} position={"relative"}>
                <Image
                  src={"/bank/bank_danamon.png"}
                  alt={""}
                  layout={"fill"}
                  objectFit={"scale-down"}
                />
              </Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                Bank Danamon
              </Text>
            </Flex>
            <Flex mt={2} gap={2}>
              <Box w={10} h={5} position={"relative"}>
                <Image
                  src={"/bank/bank_permata.png"}
                  alt={""}
                  layout={"fill"}
                  objectFit={"scale-down"}
                />
              </Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                Bank Permata
              </Text>
            </Flex>
            <Flex mt={2} gap={2}>
              <Box w={10} h={5} position={"relative"}>
                <Image
                  src={"/bank/bank_hana.png"}
                  alt={""}
                  layout={"fill"}
                  objectFit={"scale-down"}
                />
              </Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                Bank Hana
              </Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </WithNext>
  );
};

export default Payment;
