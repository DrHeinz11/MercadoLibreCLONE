import { HStack, Text } from "@chakra-ui/react";
import { Link } from "wouter";

const OfferRoute = ({ title, section,cta }) => {
  return (
    <HStack align="center" spacing="4">
      <Text fontSize="3xl" fontWeight="light">
        {title}
      </Text>
      <Link href={`/all`}>
        <Text
          position="relative"
          top="5px"
          _hover={{ color: "#0049b6" }}
          as="a"
          cursor="pointer"
          color="ml.blue"
        >
          {cta}
        </Text>
      </Link>
    </HStack>
  );
};

export default OfferRoute;
