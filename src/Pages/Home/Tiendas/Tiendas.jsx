import { Box, Grid, HStack, Stack } from "@chakra-ui/react";
import { SectionRoute } from "../../../Components";
import TiendaCard from "./components/TiendaCard";
const obejtor = [
  {
    bgHeader:
      "https://http2.mlstatic.com/storage/official-stores-images/citronrepuestos/background_home202002130943.jpg",
    icon: [
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_800599-MLA40680519430_022020-R.webp",
        iconAlt: "Rejilla-Paragolpes-Citroën-C3",
        id: "1",
      },
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_881793-MLA40680518351_022020-R.webp",
        iconAlt: "Proyector-Delantero-Citroën-C3",
        id: "2",
      },
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_904722-MLA44123885770_112020-R.webp",
        iconAlt: "Guardabarros-Delantero-Izquierdo-Citroen-C3",
        id: "3",
      },
    ],
    title: "Citroën Repuestos",
    brand: {
      imgBrand:
        "https://http2.mlstatic.com/D_Q_NP_829100-MLA25965714004_092017-AE.webp",
      imgBrandAlt: "Citroën-Logo",
      brand: "Citroën ",
    },
    key: "1abc",
  },
  {
    bgHeader:
      "https://http2.mlstatic.com/storage/official-stores-images/citronrepuestos/background_home202002130943.jpg",
    icon: [
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_800599-MLA40680519430_022020-R.webp",
        iconAlt: "Rejilla-Paragolpes-Citroën-C3",
        id: "1",
      },
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_881793-MLA40680518351_022020-R.webp",
        iconAlt: "Proyector-Delantero-Citroën-C3",
        id: "2",
      },
      {
        iconUrl:
          "https://articulo.mercadolibre.com.ar/MLA-897944229-moldura-guardabarros-delantero-izquierdo-citroen-c3-aircross-_JM#c_id=/home/official-stores/item&c_brand_name=Citro%C3%ABn%20Repuestos&c_element_order=1&c_uid=d6158bbf-cb27-4357-9a93-872ba0debce8",
        iconAlt: "Guardabarros-Delantero-Izquierdo-Citroen-C3",
        id: "3",
      },
    ],
    title: "Citroën Repuestos",
    brand: {
      imgBrand:
        "https://http2.mlstatic.com/D_Q_NP_829100-MLA25965714004_092017-AE.webp",
      imgBrandAlt: "Citroën-Logo",
      brand: "Citroën ",
    },
    key: "2abc",
  },
  {
    bgHeader:
      "https://http2.mlstatic.com/storage/official-stores-images/citronrepuestos/background_home202002130943.jpg",
    icon: [
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_800599-MLA40680519430_022020-R.webp",
        iconAlt: "Rejilla-Paragolpes-Citroën-C3",
        id: "1",
      },
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_881793-MLA40680518351_022020-R.webp",
        iconAlt: "Proyector-Delantero-Citroën-C3",
        id: "2",
      },
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_904722-MLA44123885770_112020-R.webp",
        iconAlt: "Guardabarros-Delantero-Izquierdo-Citroen-C3",
        id: "3",
      },
    ],
    title: "Citroën Repuestos",
    brand: {
      imgBrand:
        "https://http2.mlstatic.com/D_Q_NP_829100-MLA25965714004_092017-AE.webp",
      imgBrandAlt: "Citroën-Logo",
      brand: "Citroën ",
    },
    key: "3abc",
  },
  {
    bgHeader:
      "https://http2.mlstatic.com/storage/official-stores-images/citronrepuestos/background_home202002130943.jpg",
    icon: [
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_800599-MLA40680519430_022020-R.webp",
        iconAlt: "Rejilla-Paragolpes-Citroën-C3",
        id: "1",
      },
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_881793-MLA40680518351_022020-R.webp",
        iconAlt: "Proyector-Delantero-Citroën-C3",
        id: "2",
      },
      {
        iconUrl:
          "https://articulo.mercadolibre.com.ar/MLA-897944229-moldura-guardabarros-delantero-izquierdo-citroen-c3-aircross-_JM#c_id=/home/official-stores/item&c_brand_name=Citro%C3%ABn%20Repuestos&c_element_order=1&c_uid=d6158bbf-cb27-4357-9a93-872ba0debce8",
        iconAlt: "Guardabarros-Delantero-Izquierdo-Citroen-C3",
        id: "3",
      },
    ],
    title: "Citroën Repuestos",
    brand: {
      imgBrand:
        "https://http2.mlstatic.com/D_Q_NP_829100-MLA25965714004_092017-AE.webp",
      imgBrandAlt: "Citroën-Logo",
      brand: "Citroën ",
    },
    key: "33abc",
  },
  {
    bgHeader:
      "https://http2.mlstatic.com/storage/official-stores-images/citronrepuestos/background_home202002130943.jpg",
    icon: [
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_800599-MLA40680519430_022020-R.webp",
        iconAlt: "Rejilla-Paragolpes-Citroën-C3",
        id: "1",
      },
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_881793-MLA40680518351_022020-R.webp",
        iconAlt: "Proyector-Delantero-Citroën-C3",
        id: "2",
      },
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_904722-MLA44123885770_112020-R.webp",
        iconAlt: "Guardabarros-Delantero-Izquierdo-Citroen-C3",
        id: "3",
      },
    ],
    title: "Citroën Repuestos",
    brand: {
      imgBrand:
        "https://http2.mlstatic.com/D_Q_NP_829100-MLA25965714004_092017-AE.webp",
      imgBrandAlt: "Citroën-Logo",
      brand: "Citroën ",
    },
    key: "4abc",
  },
  {
    bgHeader:
      "https://http2.mlstatic.com/storage/official-stores-images/citronrepuestos/background_home202002130943.jpg",
    icon: [
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_800599-MLA40680519430_022020-R.webp",
        iconAlt: "Rejilla-Paragolpes-Citroën-C3",
        id: "1",
      },
      {
        iconUrl:
          "https://http2.mlstatic.com/D_Q_NP_881793-MLA40680518351_022020-R.webp",
        iconAlt: "Proyector-Delantero-Citroën-C3",
        id: "2",
      },
      {
        iconUrl:
          "https://articulo.mercadolibre.com.ar/MLA-897944229-moldura-guardabarros-delantero-izquierdo-citroen-c3-aircross-_JM#c_id=/home/official-stores/item&c_brand_name=Citro%C3%ABn%20Repuestos&c_element_order=1&c_uid=d6158bbf-cb27-4357-9a93-872ba0debce8",
        iconAlt: "Guardabarros-Delantero-Izquierdo-Citroen-C3",
        id: "3",
      },
    ],
    title: "Citroën Repuestos",
    brand: {
      imgBrand:
        "https://http2.mlstatic.com/D_Q_NP_829100-MLA25965714004_092017-AE.webp",
      imgBrandAlt: "Citroën-Logo",
      brand: "Citroën ",
    },
    key: "5abc",
  },
];
const Tiendas = () => {
  return (
    <Stack maxW="full" overflow="hidden">
      <SectionRoute
        title="Beneficios de Mercado Puntos"
        cta="Ver todos los beneficios"
      />
      <HStack
        overflowY="hidden"
        overflowX={{ base: "scroll", lg: "hidden" }}
        maxW="full"
        w="full"
      >
        {obejtor.map((element) => (
          <TiendaCard key={element.key} props={element} />
        ))}
      </HStack>
    </Stack>
  );
};

export default Tiendas;
