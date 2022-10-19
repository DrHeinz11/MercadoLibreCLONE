import { Stack, Image, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "wouter";
import Favorite from "../../../../../Components/Icons/Favorite";
const OfferCard = ({ imgUrl, imgAlt, idArt, children }) => {
  const [favorites, setFavorites] = useState(false);
  const handleFavoriteClick = () => setFavorites(!favorites);
  return (
    <Box cursor={"pointer"} position="relative" zIndex="1">
      <Box borderRadius="full" boxShadow="md" onClick={handleFavoriteClick}>
        <Favorite props={favorites} />
      </Box>
      <Link to={`/${idArt}`}>
        <Stack
          borderRadius="md"
          w="224px"
          overflow="hidden"
          h="330px"
          zIndex="10"
          whiteSpace={"normal"}
          _hover={{
            height: "auto",
            maxHeight: "392px",
            minHeight: "330px",
          }}
          transition={{ height: ".1s ease-out" }}
        >
          <Image
            src={imgUrl}
            alt={imgAlt}
            zIndex="15"
            borderBottom="1px solid #ececec"
          />

          {children}
        </Stack>
      </Link>
    </Box>
  );
};

export default OfferCard;
