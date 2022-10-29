import { chakra, Stack, Heading, StackDivider, Grid } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

const SearchBar = () => {
  const [keywoard, setKeyboard] = useState("");
  const formReference = useRef();
  const handleSubmitSearch = (ev) => {
    ev.preventDefault();
    setKeyboard(formReference.current.value);
  };
  return (
    <Stack
      maxW="container.sm"
      borderRadius="sm"
      w="full"
      maxH="10"
      direction="row"
      gap={2}
      p={1}
      border="1px solid #e6e6e6"
      boxShadow="sm"
      bg="#fff"
      align={"center"}
    >
      <chakra.form
        onSubmit={(ev) => handleSubmitSearch(ev)}
        h="8"
        w="full"
        px="2"
        display="flex"
        align="center"
      >
        <chakra.input
          ref={formReference}
          w="full"
          placeholder="Buscar marcas,productos y más..."
          type="text"
        />
      </chakra.form>
      <StackDivider w="1px" bg="#e6e6e6" />
      <Grid
        margin="0 !important"
        placeContent={"center"}
        p="1"
        boxSize="2rem"
        borderRadius="full"
        cursor="pointer"
        onClick={handleSubmitSearch}
        _hover={{ backgroundColor: "#fff" }}
      >
        <SearchIcon
          cursor={"pointer"}
          onClick={handleSubmitSearch}
          boxSize="1.25rem"
          color="ml.greyAlpha"
        />
      </Grid>
    </Stack>
  );
};

export default SearchBar;
