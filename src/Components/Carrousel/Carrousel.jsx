import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import Slider from "./Slider";

const Carrousel = ({ children }) => {
  const [widthTransfrom, setWidthTransfrom] = useState(0);

  const scrollMethods = {
    scrollRight() {
      setWidthTransfrom((prev) => (prev >= 1500 ? 0 : prev + 500));
    },
    scrollLeft() {
      setWidthTransfrom((prev) => (prev <= 0 ? 1500 : prev - 500));
    },
  };

  return (
    <Stack
      direction="row"
      justify="space-evenly"
      alignItems="center"
      position="relative" 
    >
      <ChevronLeftIcon
        onClick={scrollMethods.scrollLeft}
        cursor="pointer"
        width="4rem"
        height="4rem"
        display={{ base: "none", md: "block" }}
        position="absolute"
        left="0"
        p={1}
        bg="white"
        borderRadius="full"
        zIndex="100"
        _hover={{ boxShadow: "md" }}
      />
      <Slider widthTransfrom={widthTransfrom} />
      <ChevronRightIcon
        onClick={scrollMethods.scrollRight}
        cursor="pointer"
        width="4rem"
        height="4rem"
        display={{ base: "none", md: "block" }}
        _hover={{ boxShadow: "md" }}
        position="absolute"
        right="0"
        p={1}
        bg="white"
        borderRadius="full"
        zIndex="100"
      />
    </Stack>
  );
};

export default Carrousel;
