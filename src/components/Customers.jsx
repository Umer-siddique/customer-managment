import { Button, Td, Tr, useTheme } from "@chakra-ui/react";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const Customers = ({ customer }) => {
  const theme = useTheme();
  const [customerId, setCustomerId] = useState(null);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const handleOpenModal1 = (id) => {
    setIsModalOpen1(true);
    setCustomerId(id);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  return (
    <>
      <DeleteModal
        openModal={isModalOpen1}
        closeModal={handleCloseModal1}
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
          <Button bg={"green.100"} color="green" size="sm" w={"100px"}>
            Edit
          </Button>
          <Button
            size="sm"
            bg={"red.100"}
            color="red"
            w={"100px"}
            ml={4}
            onClick={() => handleOpenModal1(customer?._id)}
          >
            Delete
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default Customers;
