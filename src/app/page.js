"use client";
import { useContext } from "react";
import { Container, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { UserContext } from "./context/userContext";
import UserProfile from "./components/UserProfile";

export default function Home() {
  const { profile } = useContext(UserContext);
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Text fontSize="6xl" fontWeight="bold" textAlign="center" mt="10">
        Search User on Gihtub
      </Text>
      <br />
      <Search/>
      {profile.html_url && (<UserProfile/>)}
      {/* <UserProfile/> */}
    </Container>
  );
}
