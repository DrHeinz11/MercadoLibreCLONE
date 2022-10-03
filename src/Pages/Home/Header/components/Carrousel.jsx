import { Box, Image } from "@chakra-ui/react";

const Carrousel = () => {
  return (
    <Box w="full" margin="0 !important">
      <Image
        objectFit={"cover"}
        src="https://http2.mlstatic.com/D_NQ_664853-MLA51781340382_092022-OO.webp"
        alt="Carrousel"
      />
    </Box>
  );
};

export default Carrousel;
