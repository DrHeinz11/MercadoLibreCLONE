import { Stack, Grid } from "@chakra-ui/react";
import { Router } from "wouter";
import { SectionRoute } from "../../../Components";
import { dataBenefits } from "../../../Constant";
import { BenefitsBox, BenefitsHeading } from "./components";

const Benefits = () => {
  return (
    <Router base="/benefits">
      <Stack w="full" maxW="full" minH={{ base: "auto", md: "85vh" }} gap="4">
        <SectionRoute
          title="Beneficios de Mercado Puntos"
          cta="Ver todos los beneficios"
        />
        <Grid gap="4" gridTemplateColumns="repeat(auto-fill,minmax(325px,350px))">
          {dataBenefits.map((element) => (
            <BenefitsBox
              key={element.id}
              backgrounImg={element.backgrounImg}
              backgrounImgAlt={element.backgrounImgAlt}
            >
              <BenefitsHeading props={element} />
            </BenefitsBox>
          ))}
        </Grid>
      </Stack>
    </Router>
  );
};

export default Benefits;
