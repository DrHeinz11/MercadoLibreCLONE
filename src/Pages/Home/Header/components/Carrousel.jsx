import { Box, Image, Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Carrousel = () => {
  const dataImage = [
    "https://http2.mlstatic.com/D_NQ_604967-MLA52178930554_102022-F.webp",
    "https://http2.mlstatic.com/D_NQ_806444-MLA52070177210_102022-F.webp",
    "https://http2.mlstatic.com/D_NQ_658750-MLA52069229822_102022-F.webp",
  ];

  return (
    <Box w="full" h="50vh" spacing={"none"}>
      <Img
        boxSize="full"
        objectPosition={"center"}
        objectFit="cover"
        src={dataImage[0]}
        alt="Carrousel"
      />
    </Box>
  );
};

export default Carrousel;
