import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
      <Box position={"relative"} aspectRatio={5 / 3}>
        <Image
          src={
            "/github.svg"
          }
          width={100}
          height={100}
          // fill
          alt="github logo"
        />
          
      </Box>
      <Box>
        <Button size={"md"} colorScheme="whatsapp">
          Search History
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
