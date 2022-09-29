import { Stack, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "wouter";
import React from "react";
const links = [
  {
    route: "/",
    text: "Ofertas",
    icon: <ChevronDownIcon margin="0 !important" />,
  },
  { route: "/", text: "Ofertas" },
  { route: "/", text: "Ofertas" },
  { route: "/", text: "Ofertas" },
];
const OptionNav = () => {
  return (
    <Stack as="nav" gap="2" direction="row">
      {links.map((link, ind) => (
        <Link key={ind} href={link.route}>
          {link.icon ? (
            <Stack
              direction="row"
              color="#3333337d"
              _hover={{
                color: "ml.greyAlpha",
                transition: "color .3s ease-out",
              }}
              cursor="pointer"
              align="center"
            >
              <Text as="a" fontSize="sm" color="currentcolor">
                {link.text}
              </Text>
              {link.icon}
            </Stack>
          ) : (
            <Text
              as="a"
              cursor="pointer"
              Text
              fontSize="sm"
              color="#3333337d"
              _hover={{
                color: "ml.greyAlpha",
                transition: "color .3s ease-out",
              }}
            >
              {link.text}
            </Text>
          )}
        </Link>
      ))}
    </Stack>
  );
};

export default OptionNav;
