import { Stack, Image, Box } from "@chakra-ui/react";
import { Link } from "wouter";
const OfferCard = ({ imgUrl, imgAlt, idArt, children }) => {
  return (
    <Link to={`/${idArt}`}>
      <Box cursor={"pointer"} zIndex="1">
        <Stack
          w="224px"
          overflow="hidden"
          h={{ base: "340px", md: "332px" }}
          _hover={{
            minHeight: "355px",
            height: "auto",
            overflow: "visible",
            boxShadow: "md",
          }}
          zIndex="10"
        >
          <Image
            src={imgUrl}
            alt={imgAlt}
            zIndex="100"
            borderBottom="1px solid #ccc"
          />
          {children}
        </Stack>
      </Box>
    </Link>
  );
};

export default OfferCard;
