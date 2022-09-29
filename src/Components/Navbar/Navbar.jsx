import SearchBar from "./SearchBar";
import SubBar from "./SubBar";
import Patrocinadores from "./Patrocinadores";
import { Stack, Box } from "@chakra-ui/react";
import { Link } from "wouter";

const Navbar = () => {
  return (
    <Stack py={{ base: 4, md: 2 }} px={{ base: 2, md: "10" }} bg="ml.yellow">
      <Stack
        direction="row"
        alignItems="center"
        w="full"
        justify={"space-between"}
      >
        <Link href="/">
          <Box
            as={"a"}
            cursor="pointer"
            w="134px"
            h="34px"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={
              "url('https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus@2x.png')"
            }
          />
        </Link>
        <SearchBar />
        <Box display={{ base: "none", md: "contents" }}>
          <Patrocinadores />
        </Box>
      </Stack>
      <Box display={{ base: "none", md: "contents" }}>
        <SubBar />
      </Box>
    </Stack>
  );
};

export default Navbar;
