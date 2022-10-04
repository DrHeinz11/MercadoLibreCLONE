import { Container, Stack } from "@chakra-ui/react";
import { Offers } from "../Offers";
import Subscribe from "../Subscribe/Subscribe";
import { Carrousel, OptionPay } from "./components";

const Header = () => {
  return (
    <Stack maxW="full" gap={4} alignItems="center" margin="0 !important">
      <Carrousel />
    </Stack>
  );
};

export default Header;
