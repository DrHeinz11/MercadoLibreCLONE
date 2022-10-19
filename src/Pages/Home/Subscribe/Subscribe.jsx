import {
  Stack,
  Box,
  Heading,
  StackDivider,
  HStack,
  Text,
  chakra,
  Grid,
} from "@chakra-ui/react";
import { SubsBenefits, SubsHeader } from "./components/";
import { dataSubscribe } from "../../../Constant";

const Subscribe = () => {
  return (
    <Stack bg="#fff" w="full" borderRadius="md" boxShadow="lg">
      <HStack
        justify="space-between"
        py={6}
        px={8}
        color="#fff"
        borderRadius="md"
        bgGradient="linear(to-l, #0c1a51,#a90f90 50%)"
      >
        <Heading >Suscribite al nivel 6</Heading>
        <HStack>
          <StackDivider h="16" w="5px" bg="#fff" />
          <Box>
            <Text as="s">$.1439</Text>
            <Heading>
              $ 499 <chakra.span fontSize="sm">/mes</chakra.span>
            </Heading>
          </Box>
        </HStack>
      </HStack>
      <SubsHeader>
        <Grid gridTemplateColumns="repeat(auto-fill,minmax(325px,1fr))" gap={2}>
          {dataSubscribe.map((element) => (
            <SubsBenefits key={element.key} props={element} />
          ))}
        </Grid>
      </SubsHeader>
    </Stack>
  );
};

export default Subscribe;
