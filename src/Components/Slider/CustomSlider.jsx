import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import Slides from "./components/Slides";

const CustomSlider = ({ children }) => {
  const [actionSlide, setActionSlide] = useState(0);
  const [widthSlide, setWidthSlide] = useState("");

  const scrollMethods = {
    scrollRight(setActionSlide) {
      setActionSlide((prev) =>
        prev >= widthSlide.carrouselReference ? 0 : prev + widthSlide.cardWidth
      );
    },
    scrollLeft(setActionSlide) {
      setActionSlide((prev) =>
        prev <= 0
          ? widthSlide.carrouselReference + 10
          : prev - widthSlide.cardWidth
      );
    },
  };

  return (
    <>
      <Stack
        my="10"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        position="relative"
      >
        <ChevronLeftIcon
          onClick={() => scrollMethods.scrollLeft(setActionSlide)}
          zIndex="200"
          position="absolute"
          opacity={actionSlide === 0 ? "0" : "1"}
          cursor="pointer"
          width="4rem"
          height="4rem"
          borderRadius="full"
          bg="#fff"
          border="3px solid var(--chakra-colors-primary-darkGranate)"
          _hover={{
            borderColor: "var(--chakra-colors-primary-pinkChicle)",
            color: "var(--chakra-colors-primary-pinkChicle)",
            opacity: "1",
            transition: "all 300ms ease 0s",
          }}
          display={{ base: "none", md: "block" }}     boxShadow="lg"
        />
        <Slides traslate={actionSlide} setWidthSlide={setWidthSlide}>
          {children}
        </Slides>
        <ChevronRightIcon
          onClick={() => scrollMethods.scrollRight(setActionSlide)}
          zIndex="200"
          position="absolute"
          right="0"
          cursor="pointer"
          width="4rem"
          height="4rem"
          borderRadius="full"
          bg="#fff"
          boxShadow="lg"
          _hover={{
            borderColor: "var(--chakra-colors-primary-pinkChicle)",
            transition: "all 300ms ease 0s",
          }}
          display={{ base: "none", md: "block" }}
        />
      </Stack>
    </>
  );
};

export default CustomSlider;
