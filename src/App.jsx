import {  Stack } from "@chakra-ui/react";
import { Navbar } from "./Components";
import { Header } from "./Pages/Home";

const App = () => {
  return (
    <Stack margin="0 auto" bg="lightGrey" alignItems="center">
      <Navbar />
      <Header />
    </Stack>
  );
};

export default App;
