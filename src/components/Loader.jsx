import { Box } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <div className="loader"></div>
    </Box>
  );
};

export default Loader;
