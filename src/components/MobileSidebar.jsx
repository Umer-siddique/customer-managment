import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Link,
  useTheme,
} from "@chakra-ui/react";
import Logo from "../images/logo.png";
import { FaUsers } from "react-icons/fa";

const MobileSidebar = ({ closeDrawer, openDrawer }) => {
  const theme = useTheme();
  return (
    <Drawer placement="left" onClose={closeDrawer} isOpen={openDrawer}>
      <DrawerOverlay>
        <DrawerContent
          backgroundColor={theme.colors.sidebarBackground}
          color="white"
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <img src={Logo} alt="Logo" width="100" />
          </DrawerHeader>
          <DrawerBody>
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
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default MobileSidebar;
