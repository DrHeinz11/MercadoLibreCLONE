import { Container, Stack } from "@chakra-ui/react";
import { Offers } from "../Offers";
import { Carrousel, OptionPay } from "./components";

const Header = () => {
  return (
    <Stack maxW="full" gap={4} alignItems="center" margin="0 !important">
      <Carrousel />
      <Container maxW="1200px" centerContent>
        <OptionPay />
          <Offers />
      </Container>
    </Stack>
  );
};

export default Header;
