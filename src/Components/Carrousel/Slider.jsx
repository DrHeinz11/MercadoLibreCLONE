import { Box, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { obejtor } from "../../Constant";
import { TiendaCard } from "../../Pages/Home";

const Slider = ({ widthTransfrom }) => {
  const carruselReference = useRef();

  return (
    <Box
      ref={carruselReference}
      w='95%'
      overflowX={{ base: "scroll", md: "hidden" }}
      overflowY="hidden"
    >
      <Stack
        as={motion.div}
        w="max-content"
        direction="row"
        p={4}
        gap={4}
        transition={{ base: "none", md: "transform 400ms ease" }}
        transform={{
          base: "none",
          md: `translate3d(-${widthTransfrom}px,0,0)`,
        }}
      >
        {obejtor.map((element) => (
          <TiendaCard key={element.key} props={element} />
        ))}
      </Stack>
    </Box>
  );
};

export default Slider;
