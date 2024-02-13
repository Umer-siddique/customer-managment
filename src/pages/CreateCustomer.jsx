import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useTheme,
} from "@chakra-ui/react";

const CreateCustomer = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCustomer = () => {
    setIsLoading(true);
    // Simulate an API call or any other asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);
      // Reset any form fields or state values if needed
    }, 2000); // Simulating 2 seconds loading time
  };

  return (
    <>
      {/* Add New Customer Button */}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            bg={theme.colors.buttonGradientBackground}
            color="white"
            textAlign="center"
          >
            Add New Customer
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <input type="text" placeholder="Username" />
            </Box>
            <Box>
              <input type="text" placeholder="Customer Name" />
            </Box>
            <Box>
              <input type="text" placeholder="Email" />
            </Box>
            <Box mt={4} color="green" textAlign="center" cursor="pointer">
              Upload Photo
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              backgroundImage={theme.colors.buttonGradientBackground}
              onClick={handleAddCustomer}
              isLoading={isLoading}
              loadingText="Adding..."
              textTransform="uppercase"
            >
              Add Customer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCustomer;
