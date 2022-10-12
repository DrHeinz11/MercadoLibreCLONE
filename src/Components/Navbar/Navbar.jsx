import SearchBar from "./SearchBar";
import SubBar from "./SubBar";
import Patrocinadores from "./Patrocinadores";
import { Stack, Box } from "@chakra-ui/react";
import { Link } from "wouter";

const Navbar = () => {
  return (
    <Stack margin='0 auto !important' py={{ base: 4, md: 2 }} px={2} bg="ml.yellow" w="full">
      <Stack margin='0 auto !important' w='full' maxW="1200px">
        <Stack
          direction="row"
          alignItems="center"
          w="full"
          justify={"space-between"}
          gap={2}
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
        <Box directionrender={{ base: "column", md: "row" }}>
          <SubBar />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
