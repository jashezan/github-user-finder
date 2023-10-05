"use client"
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import HistoryModal from "./HistoryModal";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
      <Box position={"relative"} aspectRatio={5 / 3}>
        <a href="/">
          <Image src={"/github.svg"} width={70} height={70} alt="github logo" />
        </a>
      </Box>
      <Box>
        <Button size={"md"} colorScheme="whatsapp" onClick={onOpen}>
          Search History
        </Button>
      </Box>

      {isOpen && <HistoryModal onClose={onClose} isOpen={isOpen} />}
    </Flex>
  );
};

export default Navbar;
