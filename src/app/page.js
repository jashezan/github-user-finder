import { Button, Container, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

export default function Home() {
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Text fontSize="6xl" fontWeight="bold" textAlign="center" mt="10">
        Search User on Gihtub
      </Text>
      <Search/>
    </Container>
  );
}
