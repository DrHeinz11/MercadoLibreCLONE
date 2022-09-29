import { Stack } from "@chakra-ui/react";
import LocationNav from "./LocationNav";
import OptionNav from "./OptionNav";
import LoginNav from "./LoginNav";

const SubBar = () => {
  return (
    <Stack direction="row" align="flex-end" justify={"space-between"} gap="2">
      <LocationNav />
      <OptionNav />
      <LoginNav/>
    </Stack>
  );
};

export default SubBar;
