import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import Repos from "./Repos";

/**
 * @typedef {Object} Profile
 * @property {string} avatar_url
 * @property {string} bio
 * @property {string} blog
 * @property {string | null} company
 * @property {string} created_at
 * @property {string | null} email
 * @property {string} events_url
 * @property {number} followers
 * @property {string} followers_url
 * @property {number} following
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} gravatar_id
 * @property {string | null} hireable
 * @property {string} html_url
 * @property {number} id
 * @property {string | null} location
 * @property {string} login
 * @property {string} name
 * @property {string} node_id
 * @property {string} organizations_url
 * @property {number} public_gists
 * @property {number} public_repos
 * @property {string} received_events_url
 * @property {string} repos_url
 * @property {boolean} site_admin
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string | null} twitter_username
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @type {Profile}
 */

const UserProfile = () => {
  const { profile } = useContext(UserContext);
  return (
    <>
      <Flex
        border={"2px solid"}
        borderColor={"whatsapp.500"}
        my={16}
        padding={8}
        borderRadius={4}
        gap={8}
      >
        <VStack gap={5}>
          <Avatar
            src={profile.avatar_url}
            border={"2px solid"}
            borderColor={"whatsapp.500"}
            name={profile.name}
            size={"2xl"}
          />
          <Button colorScheme="whatsapp" size={"sm"}>
            <a href={profile.html_url} target="_blank">
              View Profile
            </a>
          </Button>
        </VStack>
        <VStack alignItems={"self-start"}>
          <Flex gap={4}>
            <Badge fontSize={"0.9em"} colorScheme="orange">
              Public Repos: {profile.public_repos}
            </Badge>
            <Badge fontSize={"0.9em"} colorScheme="pink">
              Public Gist: {profile.public_gists}
            </Badge>
            <Badge fontSize={"0.9em"} colorScheme="cyan">
              Followser: {profile.followers}
            </Badge>
            <Badge fontSize={"0.9em"} colorScheme="purple">
              Following: {profile.following}
            </Badge>
          </Flex>
          <Text
            fontSize={"2rem"}
            fontWeight={"bold"}
            mt={4}
            color={"whatsapp.400"}
          >
            {profile.name}
          </Text>
          <Text fontSize={"0.9rem"} mt={4} color={"gray.200"}>
            {profile.bio}
          </Text>
          <Box>
            <Text fontSize={"sm"}>
              <Text as={"span"} fontWeight={"bold"} color={"whatsapp.400"}>
                Company:{" "}
              </Text>
              {profile.company || "Not Specified"}
            </Text>
            <Text fontSize={"sm"}>
              <Text as={"span"} fontWeight={"bold"} color={"whatsapp.400"}>
                Location:{" "}
              </Text>
              {profile.location || "Not Specified"}
            </Text>
            <Text fontSize={"sm"}>
              <Text as={"span"} fontWeight={"bold"} color={"whatsapp.400"}>
                Blog:{" "}
              </Text>
              {profile.blog ? (
                <a href={profile.blog}>
                  {profile.blog.replace("https://", "")}
                </a>
              ) : (
                "Not Specified"
              )}
            </Text>
            <Text fontSize={"sm"}>
              <Text as={"span"} fontWeight={"bold"} color={"whatsapp.400"}>
                Member Since:{" "}
              </Text>
              {new Date(profile.created_at).toLocaleDateString("en-UK", {
                year: "numeric",
                month: "short",
              })}
            </Text>
          </Box>
        </VStack>
      </Flex>
      <Repos repos_url={profile.repos_url} />
    </>
  );
};

export default UserProfile;
