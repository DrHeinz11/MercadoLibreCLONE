import { Stack } from "@chakra-ui/react";
import { OfferCard, OfferFees, OfferPrice, OfferRoute } from "./components";
const data = [
  {
    imgUrl:
      "https://http2.mlstatic.com/D_Q_NP_924464-MLA50804451852_072022-AB.webp",
    imgAlt: "Televisor",
    idArt: "asd1233",
    price: 64999,
    discount: "18% OFF",
    prevPrice: 79999,
    description: "Smart Tv Led Bgh 43 Full Hd Android 220v",
  },
  {
    imgUrl:
      "https://http2.mlstatic.com/D_Q_NP_924464-MLA50804451852_072022-AB.webp",
    imgAlt: "Televisor",
    idArt: "asd1234",
    price: 64999,
    discount: "18% OFF",
    prevPrice: 79999,
    description: "Smart Tv Led Bgh 43 Full Hd Android 220v",
  },
  {
    imgUrl:
      "https://http2.mlstatic.com/D_Q_NP_924464-MLA50804451852_072022-AB.webp",
    imgAlt: "Televisor",
    idArt: "asd1235",
    price: 64999,
    discount: "18% OFF",
    prevPrice: 79999,
    description: "Smart Tv Led Bgh 43 Full Hd Android 220v",
  },
  {
    imgUrl:
      "https://http2.mlstatic.com/D_Q_NP_924464-MLA50804451852_072022-AB.webp",
    imgAlt: "Televisor",
    idArt: "asd1236",
    price: 64999,
    discount: "18% OFF",
    prevPrice: 79999,
    description: "Smart Tv Led Bgh 43 Full Hd Android 220v",
  },
];

const Offers = () => {
  return (
    <Stack w="full" maxW='full' minH="100vh" px={{base:5,md:14}} gap="4">
      <OfferRoute />
      <Stack overflowX={{base:"scroll", md:'hidden'}} overflowY="hidden" minH='70vh'  maxW='full' width='full' direction="row" gap="4">
        {data.map((element) => (
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
  );
};

export default Offers;
