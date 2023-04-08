import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NoPage = () => {
  const navigate = useNavigate();
  return (
      <Flex flexDirection="column" alignItems="center" justifyContent={"center"}>
        <Heading>No Page</Heading>
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={() => {
            navigate("/");
          }}
        >
          Volver al inicio
        </Button>
      </Flex>
  );
};
