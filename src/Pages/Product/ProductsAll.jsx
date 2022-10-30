import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import { dataCardBrand } from "../../Constant";
import ProductFees from "./components/ProductItem/ProductFees";
import ProductItem from "./components/ProductItem/ProductItem";
import ProductPrice from "./components/ProductItem/ProductPrice";

const ProductsAll = ({ params }) => {
  const initalize = () =>
    dataCardBrand.filter((element) => element.brand.brand === params.id);
  const [productsAll, setProductAll] = useState(initalize);
  console.log(productsAll[0]);

  return (
    <Grid
      gridTemplateColumns="repeat(auto-fill,minmax(340px,1fr))"
      w="full"
      gap="10"
      minH="100vh"
    >
      {productsAll[0]?.icon?.map((product) => (
        <ProductItem
          brand={params.id}
          key={product.id}
          idArt={product.id}
          imgUrl={product.iconThumbnailUrl}
          imgAlt={product.iconThumbnailAlt}
        >
          <ProductPrice price={product.price} description={product.description}>
            <ProductFees price={product.price} />
          </ProductPrice>
        </ProductItem>
      ))}
    </Grid>
  );
};

export default ProductsAll;
