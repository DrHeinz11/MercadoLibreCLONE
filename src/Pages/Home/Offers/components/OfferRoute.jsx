import { HStack, Stack, Text } from "@chakra-ui/react";
import { Link } from "wouter";

const OfferRoute = () => {
  return (
    <HStack align="center" spacing="4">
      <Text fontSize="3xl" fontWeight="light">
        Ofertas
      </Text>
      <Link href="/ofertas/all">
        <Text
        position='relative'
        top='5px'
          _hover={{ color: "#0049b6" }}
          as="a"
          cursor="pointer"
          color="ml.blue"
        >
          Ver todas
        </Text>
      </Link>
    </HStack>
  );
};

export default OfferRoute;
