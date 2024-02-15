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
  Text,
  HStack,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { LiaSortSolid } from "react-icons/lia";
import Loader from "../components/Loader";
import CreateCustomerModal from "../components/CreateCustomerModal";
import Customers from "../components/Customers";

import {
  useCustomersQuery,
  useSortedCustomersQuery,
} from "../services/customersApi";

const Customer = () => {
  const [sortColumn, setSortColumn] = useState(""); // Track the currently sorted column
  const { data, isLoading } = useCustomersQuery();
  const { data: sortedData, isLoading: isSortedLoading } =
    useSortedCustomersQuery(sortColumn); // Use the new sorted data query hook
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortColumn(`-${column}`);
    } else {
      setSortColumn(column);
    }
  };

  const sortedCustomers = sortColumn
    ? sortedData?.data?.customers
    : data?.data?.customers;

  if (isLoading || isSortedLoading) return <Loader />;

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
                onClick={() => handleSort("username")}
              >
                <HStack>
                  <Text>Username</Text>
                  <LiaSortSolid cursor={"pointer"} />
                </HStack>
              </Th>
              <Th
                color={theme.colors.green400}
                textTransform={"capitalize"}
                fontSize="md"
                fontWeight="600"
                onClick={() => handleSort("customerName")}
              >
                <HStack>
                  <Text>Customer Name</Text>
                  <LiaSortSolid cursor={"pointer"} />
                </HStack>
              </Th>
              <Th
                color={theme.colors.green400}
                textTransform={"capitalize"}
                fontSize="md"
                fontWeight="600"
                onClick={() => handleSort("email")}
              >
                <HStack>
                  <Text>Email</Text>
                  <LiaSortSolid cursor={"pointer"} />
                </HStack>
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
            {sortedCustomers?.map((customer) => (
              <Customers key={customer._id} customer={customer} />
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Customer;
