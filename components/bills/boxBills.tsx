import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Spacer,
  Text,
  useMergeRefs,
  VStack,
} from "@chakra-ui/react";
import { EditIcon, ItemsAddingIcon, TrashIcon } from "../../components/icons";
import React, { MouseEventHandler } from "react";

type BoxBillsType = {
  index: number;
  title: string;
  trashButton?: MouseEventHandler<HTMLButtonElement> | undefined;
  minusButton?: MouseEventHandler<HTMLButtonElement> | undefined;
  plusButton?: MouseEventHandler<HTMLButtonElement> | undefined;
  perPiece: number;
  totalPrice: number;
};

const BoxBills = ({
  index,
  title,
  trashButton,
  minusButton,
  plusButton,
  perPiece,
  totalPrice,
}: BoxBillsType) => {
  return (
    <Box w={"full"}>
      <Flex align={"center"}>
        <Text fontWeight={"semibold"}>{title}</Text>
        <Spacer />
        <Popover>
          <PopoverTrigger>
            <Button variant={"unstyled"} size={"xs"}>
              <Center>
                <TrashIcon />
              </Center>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>Delete Item?</PopoverBody>
              <PopoverFooter>
                <Flex>
                  <Spacer />
                  <Button colorScheme={"red"} size={"sm"} onClick={trashButton}>
                    Delete
                  </Button>
                </Flex>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </Flex>
      <Text mt={1} fontSize={"sm"}>
        Rp.{perPiece}
      </Text>
      <Flex mt={1}>
        <HStack align={"center"}>
          <Button variant={"unstyled"} size={"xs"} onClick={minusButton}>
            <Center>
              <ItemsAddingIcon.minus />
            </Center>
          </Button>
          <Text fontWeight={"semibold"}>1</Text>
          <Button variant={"unstyled"} size={"xs"} onClick={plusButton}>
            <Center>
              <ItemsAddingIcon.plus />
            </Center>
          </Button>
        </HStack>
        <Spacer />
        <Text fontWeight={"semibold"}>Rp.{totalPrice}</Text>
      </Flex>
    </Box>
  );
};

export default BoxBills;
