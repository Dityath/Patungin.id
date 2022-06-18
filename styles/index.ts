import { chakra } from "@chakra-ui/react";
import { Hamburger } from "../components/icons";

// header
export const HeaderStyle: any = chakra("header", {
  baseStyle: {
    backgroundColor: "",
    w: "full",
    h: "20",
    display: "flex",
    justifyItem: "center",
    alignItems: "center",
    px: "5",
  },
});
