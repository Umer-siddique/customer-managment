import { Box, Flex, IconButton } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

const Topbar = ({ handleDrawerToggle }) => {
  return (
    <Flex
      backgroundColor="white"
      py={7}
      px={6}
      pl={10}
      boxShadow="md"
      alignItems="center"
    >
      {/* Show toggle button only on smaller screens */}
      <IconButton
        icon={<MdMenu />}
        display={{ base: "block", md: "none" }}
        onClick={handleDrawerToggle}
        variant="ghost"
        fontSize="24px" // Increase font size
        alignSelf="center" // Center icon vertically
      />
      <Box fontWeight="bold" textTransform={"uppercase"} fontSize="22px">
        Customers
      </Box>
    </Flex>
  );
};

export default Topbar;
