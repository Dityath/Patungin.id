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
import React, {
  useState,
  useRef,
  MouseEventHandler,
  useEffect,
  FormEventHandler,
} from "react";
import { SplitBill } from "../global/store";

type FormValue = {
  target: {
    value: React.SetStateAction<string>;
  };
};

type BoxBillsType = {
  index: number;
  title: string;
  trashButton?: MouseEventHandler<HTMLButtonElement> | undefined;
  perPiece: number;
  price: number;
};

const BoxBills = ({
  index,
  title,
  trashButton,
  perPiece,
  price,
}: BoxBillsType) => {
  const [editName, setEditName] = useState<boolean>(false);
  const [editNumber, setEditNumber] = useState<boolean>(false);
  const [piece, setPiece] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [setGlobalItemsName] = SplitBill((state) => [
    state.items,
    state.setIndexNameItems,
  ]);

  useEffect(() => {
    if (piece < 0) {
      setPiece(0);
    }
  }, [piece, price]);

  return (
    <Box w={"full"}>
      <Flex align={"center"}>
        <Text
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          fontWeight={"semibold"}
        >
          {title}
        </Text>
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
      <HStack mt={1}>
        <Text fontSize={"sm"}>Rp.</Text>
        <Text fontSize={"sm"}>{price}</Text>
      </HStack>
      <Flex mt={1}>
        <HStack align={"center"}>
          <Button
            variant={"unstyled"}
            size={"xs"}
            onClick={() => setPiece(piece - 1)}
          >
            <Center>
              <ItemsAddingIcon.minus />
            </Center>
          </Button>
          <Text fontWeight={"semibold"}>{piece}</Text>
          <Button
            variant={"unstyled"}
            size={"xs"}
            onClick={() => setPiece(piece + 1)}
          >
            <Center>
              <ItemsAddingIcon.plus />
            </Center>
          </Button>
        </HStack>
        <Spacer />
        <Text fontWeight={"semibold"}>Rp.{price * piece}</Text>
      </Flex>
    </Box>
  );
};

export default BoxBills;
