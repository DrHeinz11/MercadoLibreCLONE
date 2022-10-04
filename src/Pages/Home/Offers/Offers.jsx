import { Stack } from "@chakra-ui/react";
import { OfferCard, OfferFees, OfferPrice, OfferRoute } from "./components";
import { Router } from "wouter";
import { dataProduct } from "../../../Constant";

const Offers = () => {
  return (
    <Router base="/products">
      <Stack w="full" maxW="full" minH="100vh" px={{ base: 5, md: 14 }} gap="4">
        <OfferRoute />
        <Stack
          overflowX={{ base: "scroll", md: "hidden" }}
          overflowY="hidden"
          minH="70vh"
          maxW="full"
          width="full"
          direction="row"
          gap="4"
        >
          {dataProduct.map((element) => (
            <OfferCard
              key={element.idArt}
              imgUrl={element.imgUrl}
              imgAlt={element.imgAlt}
              idArt={element.idArt}
            >
              <OfferPrice
                price={element.price}
                discount={element.discount}
                prevPrice={element.prevPrice}
                description={element.description}
              >
                <OfferFees price={element.price} />
              </OfferPrice>
            </OfferCard>
          ))}
        </Stack>
      </Stack>
    </Router>
  );
};

export default Offers;
