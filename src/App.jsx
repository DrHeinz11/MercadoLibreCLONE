import { Container, Stack } from "@chakra-ui/react";
import { OptionPay } from "./Components/Header/OptionPay";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <Stack margin="0 auto" bg="lightGrey">
      App
      <Navbar />
      <Container maxW='1200px' centerContent>
      <OptionPay />
      </Container>
    </Stack>
  );
};

export default App;
