"use client";
import { Button, Input } from "@chakra-ui/react";
import React, { useState, useReducer, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import { fetchReducer, fetchAction, fetchInitialState } from "../reducers/fetch";
import { emptyQuery, userNotFound, fetchError } from "../data/toastData";
import { UserContext } from "../context/userContext";



const Search = () => {
  const [query, setQuery] = useState("");
  const [state, dispatch] = useReducer(fetchReducer, fetchInitialState);
  const { setProfile } = useContext(UserContext);
  const toast = useToast();

const addUserToLocalStorage = (data, username) => {
  const users = JSON.parse(localStorage.getItem("github-users")) || [];
  const userExists = users.find((user) => user.id === username);
  if(userExists){
    users.splice(users.indexOf(userExists), 1);
  }
  users.unshift({
    id: username,
    avatar_url: data.avatar_url,
    name: data.name,
    url: data.html_url,
  })
  localStorage.setItem("github-users", JSON.stringify(users));
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      return toast(emptyQuery);
    } else {
      dispatch({ type: fetchAction.FETCH_START });
      fetch(`https://api.github.com/users/${query}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            dispatch({ type: fetchAction.FETCH_ERROR, error: data.message });
            return toast(userNotFound);
          } else {
            dispatch({ type: fetchAction.FETCH_SUCCESS, payload: data });
            // console.log(data);
            setProfile(data);
            addUserToLocalStorage(data, query);
          }
        })
        .catch((err) => {
          dispatch({ type: fetchAction.FETCH_ERROR, error: err.message });
          return toast(fetchError);
        });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Input
        variant={"outline"}
        type="text"
        placeholder="Type a username (i.e. jashezan)"
        focusBorderColor="green.500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        size={"md"}
        type="submit"
        colorScheme="whatsapp"
        sx={{ padding: "0 2.5rem" }}
        isLoading={state?.loading}
        loadingText="Searching..."
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
