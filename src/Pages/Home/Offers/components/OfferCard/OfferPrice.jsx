import { HStack, Stack, Text } from "@chakra-ui/react";

const OfferPrice = ({ price, discount, prevPrice, description, children }) => {
  const parsePrice = (price) => {
    const result = price.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
    return result;
  };
  return (
    <Stack py="20px" px="16px" position="relative" bg='#fff' margin="0 !important">
      <Text as="s">{parsePrice(prevPrice)}</Text>
      <HStack>
        <Text>{parsePrice(price)}</Text>
        <Text color='ml.green'>{discount}</Text>
      </HStack>
      {children}
      <Text>{description}</Text>
    </Stack>
  );
};

export default OfferPrice;
