import Cart from "../../assets/Cart";
import { Stack, Text } from "@chakra-ui/react";

const LoginNav = () => {
  return (
    <Stack as="nav" direction="row" gap="2" align="center" color="#3333337d">
      <Text
        _hover={{
          color: "ml.greyAlpha",
          transition: "color .15s ease-out",
        }}
        cursor="pointer"
        as="a"
        fontSize="sm"
        color="currentcolor"
      >
        Creá tu cuenta
      </Text>
      <Text
        _hover={{
          color: "ml.greyAlpha",
          transition: "color .15s ease-out",
        }}
        cursor="pointer"
        as="a"
        fontSize="sm"
        color="currentcolor"
      >
        Ingresa
      </Text>
      <Text
        _hover={{
          color: "ml.greyAlpha",
          transition: "color .15s ease-out",
        }}
        cursor="pointer"
        as="a"
        fontSize="sm"
        color="currentcolor"
      >
        Mis compras
      </Text>
      <Cart props={{ fill: "#6c6a6a" }} />
    </Stack>
  );
};

export default LoginNav;
