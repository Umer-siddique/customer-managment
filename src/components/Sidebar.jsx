import { Box, HStack, Image, Link, useTheme } from "@chakra-ui/react";
import Logo from "../images/logo.png";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const theme = useTheme();
  return (
    <Box
      flex="0 0 250px"
      backgroundColor={theme.colors.sidebarBackground}
      color="white"
      p={4}
      display={{ base: "none", md: "block" }}
      justifyContent="center" // Center the content horizontally
      alignItems="center" // Center the content vertically
      flexDirection="column" // Align items in a column
    >
      {/* Logo */}
      <Box mt={2} mb={16} px={6}>
        <Image src={Logo} alt="Logo" />
      </Box>

      {/* Menu items */}
      <Box>
        <Link href="/customers">
          <HStack
            px={4}
            py={3}
            borderRadius={"6px"}
            bg={
              window.location.pathname === "/customers"
                ? theme.colors.green700
                : "transparent"
            }
            alignItems="center" // Center items horizontally
          >
            <Box as={FaUsers} fontSize="20px" mr={2} /> {/* Icon */}
            <Box
              fontSize="17px" // Increase font size
              fontWeight="semi-bold"
              textTransform={"uppercase"}
              _hover={{ backgroundColor: theme.colors.green700 }}
              textDecoration="none"
            >
              Customers
            </Box>
          </HStack>
        </Link>
        {/* Add more menu items here */}
      </Box>
    </Box>
  );
};

export default Sidebar;
