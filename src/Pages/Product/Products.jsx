import { Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { dataCardBrand } from "../../Constant";
import ProductDescription from "./components/ProductDescription";
import ProductIcon from "./components/ProductIcon";

const Products = ({ params }) => {
  const { brand, id } = params;
  const initalize = () =>
    dataCardBrand.filter((element) => element.brand.brand === brand);

  const [dataFilled, setDataFilled] = useState(initalize);

  const dataResult =
    dataFilled && dataFilled[0].icon?.filter((element) => element.id === id);

  if (dataFilled.length === 0 || !dataResult) {
    return <Heading>No Hay resultados en este momento...</Heading>;
  }
  console.log(dataResult);

  return (
    <>
      {dataResult?.map((element) => (
        <HStack
          margin={"0 !important"}
          spacing="none"
          gap="4"
          key={element.id}
          w="full"
          justifyContent="center"
          alignItems="flex-start"
          p={{ base: 0, md: 10 }}
          flexWrap="wrap"
          bg="#fafafa"
          minH="75vh"
        >
          <ProductIcon icons={element.icons} />
          <Image
            maxW="41rem"
            h={{ base: "18rem", md: "25rem" }}
            w="full"
            objectFit="contain"
            src={element.imgUrl}
            alt={element.iconThumbnailAlt}
          />
          <ProductDescription
            id={element.id}
            iconUrl={element.iconThumbnailUrl}
            price={element.price}
            description={element.description}
            shipping={element.shipping}
          />
        </HStack>
      ))}
    </>
  );
};

export default Products;
