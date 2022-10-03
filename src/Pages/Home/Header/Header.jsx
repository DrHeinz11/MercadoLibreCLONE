
import { Stack } from "@chakra-ui/react";
import { Offers } from "../Offers";
import { Carrousel, OptionPay } from "./components";

const Header = () => {
  return (
    <Stack gap={4} alignItems="center" margin="0 !important">
      <Carrousel />
      <OptionPay />
      <Offers/>
    </Stack>
  );
};

export default Header;
