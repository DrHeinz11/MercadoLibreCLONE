import SearchBar from "./SearchBar";
import SubBar from "./SubBar";
import LibreMercadoLogo from "../../assets/LibreMercadoLogo.svg";
import Patrocinadores from "./Patrocinadores";
import { Stack, Box, Image } from "@chakra-ui/react";
import { Link } from "wouter";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [focus, setFocus] = useState(false);
  return (
    <Stack
      margin="0 auto !important"
      py={{ base: 4, md: 2 }}
      px={2}
      bg="ml.yellow"
      w="full"
    >
      <Stack margin="0 auto !important" w="full" maxW="1200px">
        <Stack
          direction="row"
          alignItems="center"
          w="full"
          justify={"space-between"}
          gap={2}
        >
          <Link href="/">
            <Box bg="#c1c1c1" borderRadius="full" p="2px">
              <Image
                maxW="75px"
                cursor="pointer"
                src={LibreMercadoLogo}
                alt="libre-mercado-logo"
              />
            </Box>
          </Link>
          <SearchBar />
          <Box display={{ base: "none", md: "contents" }}>
            <Patrocinadores />
          </Box>
          {!focus ? (
            <HamburgerIcon
              display={{ base: "block", md: "none" }}
              width="2rem"
              height="2rem"
              onClick={() => setFocus((prev) => !prev)}
            />
          ) : (
            <CloseIcon
              display={{ base: "block", md: "none" }}
              width="1.5rem"
              height="1.5rem"
              onClick={() => setFocus((prev) => !prev)}
            />
          )}
        </Stack>
        <Box
          directionrender={{ base: "column", md: "row" }}
          display={{ base: `${focus ? "content" : "none"}`, md: "contents" }}
        >
          <SubBar />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
