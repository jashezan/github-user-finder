import React, { useEffect, useState, useReducer } from "react";
import { Button, Flex, Spinner, Text, useToast } from "@chakra-ui/react";
import {
  fetchAction,
  fetchInitialState,
  fetchReducer,
} from "@/app/reducers/fetch";
import { reposError } from "../data/toastData";
import RepoCard from "./RepoCard";

const Repos = ({ repos_url }) => {
  const [state, dispatch] = useReducer(fetchReducer, fetchInitialState);
  const [showMore, setShowMore] = useState(false);
  const toast = useToast();
  useEffect(() => {
    try {
      fetch(repos_url)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            throw new Error(data.message);
          }
          dispatch({ type: fetchAction.FETCH_SUCCESS, payload: data });
          // console.log(data);
        })
        .catch((err) => {
          toast(reposError);
          dispatch({ type: fetchAction.FETCH_ERROR, error: err.message });
          console.log(err);
        });
    } catch (error) {
      dispatch({ type: fetchAction.FETCH_ERROR, error: error.message });
      toast(reposError);
      console.log(error);
    }
  }, [repos_url, toast]);
  return (
    <>
      <Text
        fontSize={"4xl"}
        color="whatsapp.500"
        textAlign={"center"}
        fontWeight={"bold"}
        mt={4}
      >
        Repositories
      </Text>
      {state.loading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} color="green" my={4} />
        </Flex>
      )}

      {state.data &&
        state.data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((repo, index) => {
            if (!showMore && index > 4) {
              return null;
            } else {
              return <RepoCard key={repo.id} repo={repo} />;
            }
          })}

      {showMore && (
        <Flex justifyContent={"center"} my={4}>
          <Button
            fontSize={"md"}
            colorScheme="whatsapp"
            onClick={() => {
              setShowMore(false);
            }}
          >
            Show Less
          </Button>
        </Flex>
      )}
      {!showMore && state.data?.length > 5 && (
        <Flex justifyContent={"center"} my={4}>
          <Button
            fontSize={"md"}
            colorScheme="whatsapp"
            onClick={() => {
              setShowMore(true);
            }}
          >
            Show More
          </Button>
        </Flex>
      )}
    </>
  );
};

export default Repos;
