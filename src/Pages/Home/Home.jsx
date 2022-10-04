import { OptionPay } from "./Header/components";
import { Container } from "@chakra-ui/react";
import Header from "./Header/Header";
import { Offers } from "./Offers";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Header />
      <Container
        gap={{ base: 20, md: 10 }}
        maxW="1200px"
        px={{ base: 5, md: 14 }}
        centerContent
      >
        <OptionPay />
        <Offers />
        <Subscribe />
      </Container>
    </>
  );
};

export default Home;
