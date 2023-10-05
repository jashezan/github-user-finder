"use client";
import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from '@chakra-ui/react'

const Search = () => {
  const [query, setQuery] = useState("");
  const toast = useToast()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!query){
      return toast({
        title: "No query",
        description: "Please enter a valid query",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }else{
      fetch(`https://api.github.com/users/${query}`)
      .then((res) => res.json())
      .then((data) => {
        if(data.message){
          return toast({
            title: "User not found",
            description: "Please enter a valid username",
            status: "error",
            duration: 5000,
            isClosable: true,
          })
        }else{
          console.log(data)
          return toast({
            title: "User found",
            description: "User found",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
        }
      })
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
        placeholder="Search..."
        focusBorderColor="green.500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button size={"md"} type="submit" colorScheme="whatsapp" sx={{padding: "0 2.5rem"}}>
        Search
      </Button>
    </form>
  );
};

export default Search;
