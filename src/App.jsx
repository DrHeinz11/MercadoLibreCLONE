import { Container, Stack } from "@chakra-ui/react";
import { OptionPay } from "./Pages";
import Navbar from "./Components";

const App = () => {
  return (
    <Stack margin="0 auto" bg="lightGrey" alignItems='center'>
      <Navbar />
      <OptionPay />
    </Stack>
  );
};

export default App;
