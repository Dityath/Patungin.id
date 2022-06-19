import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Input,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
import BoxBills from "../../components/bills/boxBills";
import {
  AddAvatarIcon,
  AddItemIcon,
  EditIcon,
  ItemsAddingIcon,
  TrashIcon,
} from "../../components/icons";
import WithNext from "../../components/layout/withNext";
import { SplitBill } from "../../components/global/store";

type FormValue = {
  target?: {
    value?: React.SetStateAction<string | any>;
  };
};

const Manual: NextPage = () => {
  const [editName, setEditName] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  // global state
  const [
    globalTitle,
    setGlobalTitle,
    globalItems,
    addGlobalItems,
    delGlobalItems,
  ] = SplitBill((state) => [
    state.title,
    state?.setTitle,
    state.items,
    state?.addItems,
    state?.deleteItems,
  ]);

  const inputName = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (editName === true) {
      inputName.current.focus();
    }

    console.log(globalItems);
  }, [editName, globalItems]);

  return (
    <>
      {page === 0 ? (
        <WithNext title={"Split Bill"} buttonClick={() => setPage(1)}>
          <Flex
            as={"form"}
            w={"full"}
            align={"center"}
            onSubmit={(e) => {
              setEditName(false);
              e.preventDefault();
            }}
          >
            {editName ? (
              <Input
                ref={inputName}
                value={globalTitle}
                variant="flushed"
                // @ts-ignore
                onChange={(e: FormValue) => setGlobalTitle(e?.target?.value)}
              />
            ) : (
              <Text
                as={"h4"}
                fontWeight={"bold"}
                fontSize={"xl"}
                textTransform={"capitalize"}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
                onClick={() => setEditName(true)}
              >
                {globalTitle ? globalTitle : "Input Name Here..."}
              </Text>
            )}
            <Spacer />
            <Button
              onClick={() => {
                setEditName(!editName);
              }}
              type={"button"}
              variant={"unstyled"}
              size={"xs"}
            >
              <Center>
                <EditIcon />
              </Center>
            </Button>
          </Flex>
          <VStack
            mt={8}
            spacing={4}
            divider={<StackDivider color={"white"} shadow={"2xl"} />}
          >
            {globalItems?.map((items: any, i: number) => {
              return (
                <BoxBills
                  index={i}
                  title={items.name ? items.name : "Change Here"}
                  trashButton={() => {
                    // @ts-ignore
                    delGlobalItems(i);
                  }}
                  key={i}
                  perPiece={items.total_price}
                  totalPrice={items.total_price}
                />
              );
            })}
            <Box as={"div"} w={"full"}>
              <Button
                variant={"unstyled"}
                // @ts-ignore
                onClick={() => addGlobalItems({ name: "", total_price: 0 })}
              >
                <HStack gap={1}>
                  <AddItemIcon />
                  <Text color={"rgba(0, 0, 0, 0.61)"}>Add Item</Text>
                </HStack>
              </Button>
            </Box>
            <VStack mb={28} w={"full"}>
              <Flex w={"full"}>
                <Text>Subtotal</Text>
                <Spacer />
                <Text>Rp.50000</Text>
              </Flex>
              <Flex w={"full"}>
                <Text>Tax</Text>
                <Spacer />
                <Text>Rp.0</Text>
              </Flex>
              <Flex w={"full"}>
                <Text>Service Charge</Text>
                <Spacer />
                <Text>Rp.0</Text>
              </Flex>
              <Flex w={"full"}>
                <Text>Discount</Text>
                <Spacer />
                <Text>Rp.0</Text>
              </Flex>
              <Flex w={"full"}>
                <Text>Others</Text>
                <Spacer />
                <Text>Rp.0</Text>
              </Flex>
              <Flex w={"full"} fontSize={"lg"} fontWeight={"bold"}>
                <Text>Total</Text>
                <Spacer />
                <Text>Rp.0</Text>
              </Flex>
            </VStack>
          </VStack>
        </WithNext>
      ) : page === 1 ? (
        <WithNext title={"Choose Friends"} buttonClick={() => setPage(2)}>
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
          <VStack
            mt={5}
            divider={<StackDivider color={"white"} shadow={"2xl"} />}
          >
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
      ) : page === 2 ? (
        <WithNext
          title={"Split Bill"}
          button={"Share Link"}
          besideButton={"Payment"}
        >
          <Accordion w={"full"} allowToggle allowMultiple>
            <AccordionItem
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
      ) : (
        ""
      )}
    </>
  );
};

export default Manual;
