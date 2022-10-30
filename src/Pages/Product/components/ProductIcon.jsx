import { Image, Stack } from "@chakra-ui/react";

const ProductIcon = ({ icons }) => {
  return (
    <Stack spacing="none" gap="2">
      {icons?.map((element) => (
        <Image
          border="1px solid #ccc"
          boxSize="68px"
          borderRadius="md"
          _hover={{ boxShadow: "xl" }}
          src={element}
        />
      ))}
    </Stack>
  );
};

export default ProductIcon;
