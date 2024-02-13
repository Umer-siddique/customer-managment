import { Button, Td, Tr, useTheme } from "@chakra-ui/react";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import EditCustomerModal from "./EditCustomerModal";

const Customers = ({ customer }) => {
  const theme = useTheme();
  const [customerId, setCustomerId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleOpenDeleteModal = (id) => {
    setDeleteModalOpen(true);
    setCustomerId(id);
  };

  const handleOpenEditModal = (id) => {
    setEditModalOpen(true);
    setCustomerId(id);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      {/* DELETE MODAL */}
      <DeleteModal
        openModal={isDeleteModalOpen}
        closeModal={handleCloseDeleteModal}
        customerId={customerId}
      />

      {/* UPDATE MODAL */}
      <EditCustomerModal
        openModal={isEditModalOpen}
        closeModal={handleCloseEditModal}
        customerId={customerId}
      />

      <Tr bg="white" borderRadius={"10px"}>
        <Td>
          <img
            src={customer?.profile}
            alt="Profile"
            borderRadius={"6px"}
            width="70"
            height="70"
          />
        </Td>
        <Td color={theme.colors.gray500} fontSize="md">
          {customer?.username}
        </Td>
        <Td
          fontSize="md"
          color={theme.colors.green500}
          textDecoration={"underline"}
          textTransform={"capitalize"}
        >
          {customer?.customerName}
        </Td>
        <Td color={theme.colors.gray500} fontSize="md">
          {customer?.email}
        </Td>
        <Td>
          <Button
            bg={"green.100"}
            color="green"
            size="sm"
            w={"100px"}
            onClick={() => handleOpenEditModal(customer?._id)}
          >
            Edit
          </Button>
          <Button
            size="sm"
            bg={"red.100"}
            color="red"
            w={"100px"}
            ml={4}
            onClick={() => handleOpenDeleteModal(customer?._id)}
          >
            Delete
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default Customers;
