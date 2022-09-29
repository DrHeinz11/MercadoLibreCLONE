import { Stack, StackDivider, Image, Grid } from "@chakra-ui/react";
import PayCard from "./PayCard";
import { Link } from "wouter";
import PlusIcon from "../../assets/PlusIcon.svg";
import { optionPay } from "../../Constant/OptionPay";

export const OptionPay = () => {
  return (
    <Stack
      gap={{ base: 0, md: "4" }}
      direction={{ base: "column", md: "row" }}
      py={1}
      px={4}
      w="full"
      borderRadius="md"
      boxShadow="md"
      bg="#fafafa"
      justify={"space-between"}
      alignItems='center'
    >
      <Grid
        w="full"
        gridTemplateColumns={"repeat(auto-fill,minmax(225px,1fr))"}
      >
        {optionPay.map((element) => (
          <PayCard props={element} key={element.key} />
        ))}
      </Grid>
      <StackDivider w={{base:'full',md:"1px"}} h={{base:'1px',md: "auto"}} bg="#e6e6e6" />
      <Link href="/">
        <Image boxSize="48px" src={PlusIcon} alt={"StarLogo"} />
      </Link>
    </Stack>
  );
};
