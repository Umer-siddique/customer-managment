import { Suspense, lazy, useState } from "react";
import {
  Box,
  useTheme,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  HStack,
  Image,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Logo from "./images/logo.png";
import CreateCustomer from "./pages/CreateCustomer";

// Lazy loaded components
const Customer = lazy(() => import("./pages/Customer"));

function App() {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Router>
      <Box display="flex" height="100vh">
        {/* Sidebar */}
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
            <Link to="/customers">
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
                >
                  Customers
                </Box>
              </HStack>
            </Link>
            {/* Add more menu items here */}
          </Box>
        </Box>

        {/* Content */}
        <Box flex={"1"}>
          {/* Topbar */}
          <Flex
            backgroundColor="white"
            py={7}
            px={6}
            pl={10}
            boxShadow="md"
            // justifyContent="space-between"
            alignItems="center"
          >
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
            {/* Show toggle button only on smaller screens */}
          </Flex>

          {/* Main content */}
          <Box p={4} bg={theme.colors.grayBg}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/customers" element={<Customer />} />
                <Route path="/customer/create" element={<CreateCustomer />} />
                {/* Add more routes here */}
              </Routes>
            </Suspense>
          </Box>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          placement="left"
          onClose={handleDrawerToggle}
          isOpen={isDrawerOpen}
        >
          <DrawerOverlay>
            <DrawerContent
              backgroundColor={theme.colors.sidebarBackground}
              color="white"
            >
              <DrawerCloseButton />
              <DrawerHeader>
                <img src="/logo.png" alt="Logo" width="100" />
              </DrawerHeader>
              <DrawerBody>
                <Box>
                  <Link to="/customers">
                    <Box
                      px={4}
                      py={2}
                      borderRadius="md"
                      _hover={{ backgroundColor: theme.colors.green700 }}
                      bg={
                        window.location.pathname === "/customers"
                          ? theme.colors.green700
                          : "transparent"
                      }
                    >
                      Customers
                    </Box>
                  </Link>
                  {/* Add more menu items here */}
                </Box>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Router>
  );
}

export default App;
