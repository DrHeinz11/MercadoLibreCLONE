import { Grid, HStack } from "@chakra-ui/react";
import React from "react";
import Card from "./components/Card";

const Descubrí = () => {
  return (
    <Grid gap='4' gridTemplateColumns="repeat(auto-fit,minmax(330px,1fr))" w='full'>
      <Card
        urlImg="https://http2.mlstatic.com/D_NQ_627055-MLA51835193577_102022-C.webp"
        topHeading={"para tu mamá tecnológica"}
        heading="hasta 25% off y 12x sin interés"
      />
      <Card
        urlImg="https://http2.mlstatic.com/D_NQ_627055-MLA51835193577_102022-C.webp"
        topHeading={"para tu mamá tecnológica"}
        heading="hasta 25% off y 12x sin interés"
      />

    </Grid>
  );
};

export default Descubrí;
