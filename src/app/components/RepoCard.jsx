import React from "react";
import { Flex, Link, Badge } from "@chakra-ui/react";

const RepoCard = ({ repo }) => {
  return (
    <Flex
      padding={4}
      bg={"whiteAlpha.206"}
      _hover={{ bg: "white Alpha.400" }}
      my={4}
      px={10}
      gap={4}
      borderRadius={4}
      transition={"all 0.3s ease"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex flex={1} direction={"column"}>
        <Link href={repo.html_url} fontSize={"lg"} fontWeight={"bold"}>
          {repo.name}
        </Link>
        <Badge
          fontSize={"0.7em"}
          colorScheme={"whatsapp"}
          w={"min-content"}
          textAlign={"center"}
          px={1}
        >
          Language: {repo.language || "None"}
        </Badge>
      </Flex>

      <Flex flex={1} gap={4} ml={6}>
        <Badge
          fontFamily={"0.9em"}
          colorScheme="orange"
          flex={1}
          textAlign={"center"}
        >
          Stars: {repo.stargazers_count || 0}
        </Badge>
        <Badge
          fontFamily={"0.9em"}
          colorScheme="pink"
          flex={1}
          textAlign={"center"}
        >
          Forks: {repo.forks_count || 0}
        </Badge>
        <Badge
          fontFamily={"0.9em"}
          colorScheme="cyan"
          flex={1}
          textAlign={"center"}
        >
          Watchers: {repo.watchers_count || 0}
        </Badge>
      </Flex>
    </Flex>
  );
};

export default RepoCard;
