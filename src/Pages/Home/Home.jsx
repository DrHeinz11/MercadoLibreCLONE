import { OptionPay } from "./Header/components";
import { Container } from "@chakra-ui/react";
import { Header } from "./Header/";
import { Offers } from "./Offers";
import { Subscribe } from "./Subscribe/";
import { Benefits } from "./Benefits";
import OffersDay from "./OffersDay/OffersDay";
import Descubrí from "./Descubrí/Descubrí";

const Home = () => {
  return (
    <>
      <Header />
      <Container
        gap={{ base: 20, md: 10 }}
        maxW="1300px"
        px={{ base: 5, md: 14 }}
        centerContent
      >
        <OptionPay />
        <Offers />
        <Subscribe />
        <Benefits />
        <OffersDay />
        <Descubrí />
      </Container>
    </>
  );
};

export default Home;
