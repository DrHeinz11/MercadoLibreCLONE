import { Box, Image } from "@chakra-ui/react";
import React from "react";

const BenefitsBox = ({ backgrounImg, backgrounImgAlt, children }) => {
  return (
    <Box boxSize='inherit' position='relative' borderRadius={"xl"}>
      <Image borderRadius={"xl"} src={backgrounImg} alt={backgrounImgAlt} />
      <>{children}</>
    </Box>
  );
};

export default BenefitsBox;
