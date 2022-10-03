import { Box, Image } from "@chakra-ui/react";
import OfferPrice from "./OfferPrice";
import { Link } from "wouter";
const OfferCard = ({
  price,
  discount,
  prevPrice,
  description,
  imgUrl,
  imgAlt,
  idArt,
}) => {
  return (
    <Link to={`/articulo/${idArt}`}>
      <Stack>
        <Image src={imgUrl} alt={imgAlt} />
        <OfferPrice />
      </Stack>
    </Link>
  );
};

export default OfferCard;
