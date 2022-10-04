import { Box, Image } from "@chakra-ui/react";

const Carrousel = () => {
  return (
    <Box w="full" h='50vh' margin="0 !important">
      <Image
        boxSize="full"
        objectPosition={'center'}
        objectFit='cover'
        src="https://http2.mlstatic.com/D_NQ_664853-MLA51781340382_092022-OO.webp"
        alt="Carrousel"
      />
    </Box>
  );
};

export default Carrousel;
