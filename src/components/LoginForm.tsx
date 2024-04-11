import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("jwt", data.jwt);
        toast({
          title: "Login Successful",
          description: "You are now logged in.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.message || "An error occurred. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="400px" margin="auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
