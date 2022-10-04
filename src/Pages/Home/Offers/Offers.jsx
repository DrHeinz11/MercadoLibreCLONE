import { Stack } from "@chakra-ui/react";
import { OfferCard, OfferFees, OfferPrice } from "./components";
import { Router } from "wouter";
import { dataProduct } from "../../../Constant";
import { SectionRoute } from "../../../Components";

const Offers = () => {
  return (
    <Router base="/products">
      <Stack w="full" maxW="full" minH={{ base: "auto", md: "85vh" }} gap="4">
        <SectionRoute title="Ofertas" />
        <Stack
          overflowX={{ base: "scroll", md: "hidden" }}
          overflowY="hidden"
          minH={{ base: "auto", md: "70vh" }}
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
