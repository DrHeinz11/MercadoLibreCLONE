import { Heading,Stack } from "@chakra-ui/react";
import React from "react";

const Products = ({ params }) => {
  const { id } = params;
  console.log(id)
  return (
    <Stack>
      <Heading>{id}</Heading>
    </Stack>
  );
};

export default Products;
