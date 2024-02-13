import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Icon,
  useTheme,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import Loader from "../components/Loader";
import CreateCustomerModal from "../components/CreateCustomerModal";
import Customers from "../components/Customers";
import { useCustomersQuery } from "../services/customersApi";

const Customer = () => {
  const { data, isLoading } = useCustomersQuery();
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      {/* CREATE AND UPDATE CUSTOMER MODAL */}
      <CreateCustomerModal
        openModal={isModalOpen}
        closeModal={handleCloseModal}
      />

      {/* Customers Table */}
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
          {/* Table Header */}
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
            {/* customer table rows */}
            {data?.data?.customers?.map((customer) => (
              <Customers key={customer._id} customer={customer} />
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Customer;
