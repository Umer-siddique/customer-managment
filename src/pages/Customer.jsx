import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  Flex,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import { useCustomersQuery } from "../services/customersApi";

const Customer = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useCustomersQuery();
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  // const handleAddCustomer = () => {
  //   setIsLoading(true);
  //   // Simulate an API call or any other asynchronous operation
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setIsModalOpen(false);
  //     // Reset any form fields or state values if needed
  //   }, 2000); // Simulating 2 seconds loading time
  // };

  const handleUploadPhoto = () => {
    // Simulate clicking on a file input
    document.getElementById("file-input").click();
  };

  return (
    <>
      {/* CREATE AND UPDATE CUSTOMER MODAL */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="md">
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader
            pt={10}
            bg={theme.colors.buttonGradientBackground}
            color="white"
            textAlign="center"
            borderTopRightRadius={"lg"}
            borderTopLeftRadius={"lg"}
            fontSize="25px"
          >
            Add New Customer
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Box mb={6} mt={8}>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Username"
                    className="input-field"
                    borderRadius="md"
                  />
                </FormControl>
              </Box>
              <Box mb={6}>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Customer Name"
                    className="input-field"
                    borderRadius="md"
                  />
                </FormControl>
              </Box>
              <Box mb={6}>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    borderRadius="md"
                  />
                </FormControl>
              </Box>
              <Box
                mb={6}
                color="green"
                cursor="pointer"
                textDecoration="underline"
              >
                <input
                  type="file"
                  id="file-input"
                  style={{ display: "none" }}
                  accept="image/*"
                />
                <span onClick={handleUploadPhoto}>Upload Photo</span>
              </Box>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              backgroundImage={theme.colors.buttonGradientBackground}
              // onClick={handleAddCustomer}
              // isLoading={isLoading}
              loadingText="Creating..."
              textTransform="uppercase"
              width="100%"
              borderRadius="md"
              mb={6}
            >
              Add Customer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* DELETE CUSTOMER MODAL */}
      <Modal isOpen={isModalOpen1} onClose={handleCloseModal1} size="md">
        <ModalOverlay />
        <ModalContent borderRadius="xl" p={8}>
          {" "}
          {/* Added padding */}
          <ModalHeader>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="column"
              textAlign="center"
              pb={4} // Added vertical spacing
            >
              <Icon as={BsTrash3} color="red" fontSize="3em" mb={3} />
              {/* Replace YourTrashIconComponent with the dustbin line icon */}
              <Box fontSize="2xl">Are you sure?</Box>
            </Box>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Box textAlign="center" fontWeight="medium" pb={4}>
              {" "}
              {/* Added vertical spacing */}
              Do you really want to delete this customer? This process cannot be
              undone.
            </Box>
          </ModalBody>
          <ModalFooter>
            <Flex justifyContent="center" width="100%">
              <Box width="50%" textAlign="center" mr={2}>
                <Button
                  bg="gray.400"
                  color="white"
                  onClick={handleCloseModal1}
                  borderRadius="md"
                  width="100%"
                >
                  Cancel
                </Button>
              </Box>
              <Box width="50%" textAlign="center" ml={2}>
                <Button
                  bg="red.500"
                  color="white"
                  borderRadius="md"
                  width="100%"
                >
                  Delete
                </Button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Table Component */}
      <Box p={4}>
        {/* Create New Customer Button */}
        <Button
          mb={8}
          p={4}
          colorScheme="green"
          leftIcon={<Icon as={MdAdd} />}
          backgroundImage={theme.colors.buttonGradientBackground}
          textTransform={"uppercase"}
          onClick={handleOpenModal}
        >
          Add New Customer
        </Button>

        {/* Table */}
        <Table variant="simple" minWidth="100%">
          {/* Add spacing between rows */}
          <Thead bg={theme.colors.green500} borderRadius={"10px"}>
            <Tr>
              <Th
                color={theme.colors.green400}
                textTransform={"capitalize"}
                fontSize="md"
                fontWeight="600"
              >
                Profile
              </Th>
              <Th
                color={theme.colors.green400}
                textTransform={"capitalize"}
                fontSize="md"
                fontWeight="600"
              >
                Username
              </Th>
              <Th
                color={theme.colors.green400}
                textTransform={"capitalize"}
                fontSize="md"
                fontWeight="600"
              >
                Customer Name
              </Th>
              <Th
                color={theme.colors.green400}
                textTransform={"capitalize"}
                fontSize="md"
                fontWeight="600"
              >
                Email
              </Th>
              <Th
                color={theme.colors.green400}
                textTransform={"capitalize"}
                fontSize="md"
                fontWeight="600"
              >
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Manually filled table rows */}
            <Tr bg="white" borderRadius={"10px"}>
              <Td>
                <img
                  src="https://via.placeholder.com/70"
                  alt="Profile"
                  borderRadius={"6px"}
                  width="70"
                  height="70"
                />
              </Td>
              <Td color={theme.colors.gray500} fontSize="md">
                john_doe
              </Td>
              <Td
                fontSize="md"
                color={theme.colors.green500}
                textDecoration={"underline"}
              >
                John Doe
              </Td>
              <Td color={theme.colors.gray500} fontSize="md">
                john.doe@example.com
              </Td>
              <Td>
                <Button bg={"green.100"} color="green" size="sm" w={"100px"}>
                  Edit
                </Button>
                <Button
                  size="sm"
                  bg={"red.100"}
                  color="red"
                  w={"100px"}
                  ml={4}
                  onClick={handleOpenModal1}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Customer;
