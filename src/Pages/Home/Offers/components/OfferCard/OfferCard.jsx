import { Stack, Image, Box } from "@chakra-ui/react";
import { Link } from "wouter";
const OfferCard = ({ imgUrl, imgAlt, idArt, children }) => {
  return (
    <Link to={`/${idArt}`}>
      <Box cursor={"pointer"} zIndex="1">
        <Stack
          borderRadius="md"
          w="224px"
          overflow="hidden"
          h={{ base: "340px", md: "338px" }}
          zIndex="10"
          _hover={{
            minHeight: "355px",
            height: "auto",
          }}
        >
          <Image
            src={imgUrl}
            alt={imgAlt}
            zIndex="100"
            borderBottom="1px solid #ececec"
          />
          {children}
        </Stack>
      </Box>
    </Link>
  );
};

export default OfferCard;
