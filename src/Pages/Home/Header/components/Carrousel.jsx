import { chakra, Image } from "@chakra-ui/react";

const Carrousel = () => {
  // const dataImage = [
  //   "https://http2.mlstatic.com/D_NQ_741821-MLA52024810833_102022-OO.webp",
  //   "https://http2.mlstatic.com/D_NQ_806444-MLA52070177210_102022-F.webp",
  //   "https://http2.mlstatic.com/D_NQ_658750-MLA52069229822_102022-F.webp",
  // ];

  const dataImage = {
    bgLarge:
      "https://http2.mlstatic.com/D_NQ_807373-MLA52178897930_102022-OO.webp",
    bgSmall:
      "https://http2.mlstatic.com/D_NQ_604967-MLA52178930554_102022-F.webp",
  };

  return (
    <chakra.picture w="full" margin="0 !important">
      <Image
        w="full"
        blockSize="auto"
        maxHeight="65vh"
        src={dataImage.bgLarge}
        alt="Carrousel"
      />
      <chakra.source srcSet={dataImage.bgSmall} media="(max-width: 600px)" />
    </chakra.picture>
  );
};

export default Carrousel;
