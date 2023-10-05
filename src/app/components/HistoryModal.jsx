"use client";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  Flex,
  Avatar,
  Box,
  Link,
  useToast
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { userDeleted } from "@/app/data/toastData"

const HistoryModal = ({ onClose, isOpen }) => {
  const [searchHistory, setSearchHistory] = useState([]);
  const toast = useToast();
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("github-users")) || [];
    setSearchHistory(users);
  }, []);

const handleDeleteUser = (id) => {
  const users = JSON.parse(localStorage.getItem("github-users")) || [];
  const userToDelete = users.find((user) => user.id === id);
  if(userToDelete){
    users.splice(users.indexOf(userToDelete), 1);
  }
  localStorage.setItem("github-users", JSON.stringify(users));
  setSearchHistory(users);
  toast(userDeleted);
}

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"gray.900"}>
        <ModalHeader color={"whatsapp.500"}>Search History</ModalHeader>
        <ModalBody>
          <Text>Users You Have Searched For: </Text>
          <VStack mt={4} maxHeight={300} overflowY={"auto"}>
            {searchHistory.length === 0 ? (
              <Text color={"gray.200"}>No Search History</Text>
            ) : (
              searchHistory.map((user) => (
                <Flex
                  key={user.id}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  bg={"whiteAlpha.200"}
                  w={"full"}
                  _hover={{ bg: "whiteAlpha.500" }}
                  borderRadius={4}
                  p={2}
                  cursor={"pointer"}
                >
                  <Flex gap={2} alignItems={"center"}>
                    <Avatar
                      src={user.avatar_url}
                      name={user.name}
                      display={"block"}
                      size={"lg"}
                    />
                    <Box>
                      <Text fontSize={"md"} fontWeight={"bold"}>
                        {user.name || "User"}
                      </Text>
                      <Text
                        fontSize={"sm"}
                        fontWeight={"bold"}
                        color={"gray.400"}
                      >
                        {user.id}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex alignItems={"center"} gap={4}>
                    <Link
                      href={user.url}
                      color="black"
                      bg="whatsapp.500"
                      size="sm"
                      p={2}
                      borderRadius={4}
                      _hover={{
                        bg: "whatsapp.700",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Visit
                    </Link>
                    <DeleteIcon
                      color={"red.500"}
                      onClick={() => {
                        handleDeleteUser(user.id);
                      }}
                    />
                  </Flex>
                </Flex>
              ))
            )}
          </VStack>
        </ModalBody>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
};

export default HistoryModal;
