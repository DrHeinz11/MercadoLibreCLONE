import { Heading } from "@chakra-ui/react";
import React from "react";

const Category = ({ params }) => {
  const { id } = params;
  return (
    <div>
      Category
      <Heading>{id}</Heading>
    </div>
  );
};

export default Category;
