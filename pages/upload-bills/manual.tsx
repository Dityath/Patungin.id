import {
  Box,
  Button,
  Center,
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
  AddItemIcon,
  EditIcon,
  ItemsAddingIcon,
  TrashIcon,
} from "../../components/icons";
import WithNext from "../../components/layout/withNext";

type FormValue = {
  target: {
    value: React.SetStateAction<string>;
  };
};

const Manual: NextPage = () => {
  const [billName, setBillName] = useState<string>("");
  const [editName, setEditName] = useState<boolean>(false);

  const inputName = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (editName === true) {
      inputName.current.focus();
    }
  }, [editName]);

  return (
    <Box>
      <WithNext title={"Split Bill"}>
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
              value={billName}
              variant="flushed"
              onChange={(e: FormValue) => setBillName(e.target.value)}
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
              {billName ? billName : "Input Name Here..."}
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
          <BoxBills perPiece={5000} />
          <BoxBills perPiece={5000} />
          <BoxBills perPiece={5000} />
          <Box as={"div"} w={"full"}>
            <Button variant={"unstyled"}>
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
            <Flex w={"full"} fontSize={"lg"} fontWeight={"semibold"}>
              <Text>Total</Text>
              <Spacer />
              <Text>Rp.0</Text>
            </Flex>
          </VStack>
        </VStack>
      </WithNext>
    </Box>
  );
};

export default Manual;