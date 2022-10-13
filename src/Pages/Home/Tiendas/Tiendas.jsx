import { Stack } from "@chakra-ui/react";
import { Carrousel, SectionRoute } from "../../../Components";

const Tiendas = () => {
  return (
    <Stack maxW="full" w='full' justify="flex-start" overflow="hidden">
      <SectionRoute
        title="Beneficios de Mercado Puntos"
        cta="Ver todos los beneficios"
      />
      <Carrousel />
    </Stack>
  );
};

export default Tiendas;
