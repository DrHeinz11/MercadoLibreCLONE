import { Stack, Image, Box, Text, chakra } from "@chakra-ui/react";
import StarLogo from "../../assets/Star+_logo.svg";

const Patrocinadores = () => {
  return (
    <Stack direction="row" wrap={'wrap'} align="flex-start">
      <Box>
        <Image src={StarLogo} alt={"StarLogo"} h="4" w="16" />
        <Text textAlign='center' fontSize="2xs" fontWeight="light">
          INCLUIDO
        </Text>
      </Box>
      <Box
        px="2"
        py="0.5"
        borderRadius="md"
        bgGradient="linear(to-r, #320057, #b515c9)"
      >
        <Text color="#fff" textTransform="capitalize" fontWeight='400'>
          {" "}
          Por <chakra.span fontWeight="500">$499</chakra.span> ¡Suscribite
          a nivel <chakra.span fontWeight="500">6</chakra.span> !
        </Text>
      </Box>
    </Stack>
  );
};

export default Patrocinadores;
