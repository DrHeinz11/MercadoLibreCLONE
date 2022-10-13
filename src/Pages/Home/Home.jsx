import { Container } from "@chakra-ui/react";
import {
  Header,
  OptionPay,
  Offers,
  Subscribe,
  Benefits,
  OffersDay,
  Descubrí,Tiendas
} from "./index";
const Home = () => {
  return (
    <>
      <Header />
      <Container
        gap={{ base: 20, md: 16 }}
        maxW="1300px"
        px={{ base: 5, md: 14 }}
        py={{ base: 5, md: 10 }}
        centerContent
      >
        <OptionPay />
        <Offers />
        <Subscribe />
        <Benefits />
        <OffersDay />
        <Descubrí />
        <Tiendas /> 
      </Container>
    </>
  );
};

export default Home;
