import { Box, Image } from "@chakra-ui/react";
import { Link } from "wouter";

const ImageHeader = ({ children, props }) => {
  return (
    <Link href={`/product/${props.brand.brand}`}>
      <Box position="relative" width="285px" cursor="pointer">
        <Image
          borderRadius="md"
          objectPosition="center"
          src={props.bgHeader}
          alt={props.key}
        />
        <>{children}</>{" "}
      </Box>
    </Link>
  );
};

export default ImageHeader;
