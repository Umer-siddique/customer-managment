import { Button, Td, Tr, useTheme } from "@chakra-ui/react";

const Customers = ({ customer, openModal }) => {
  const theme = useTheme();
  return (
    <Tr bg="white" borderRadius={"10px"} key={customer._id}>
      <Td>
        <img
          src={customer.profile}
          alt="Profile"
          borderRadius={"6px"}
          width="70"
          height="70"
        />
      </Td>
      <Td color={theme.colors.gray500} fontSize="md">
        {customer.username}
      </Td>
      <Td
        fontSize="md"
        color={theme.colors.green500}
        textDecoration={"underline"}
        textTransform={"capitalize"}
      >
        {customer.customerName}
      </Td>
      <Td color={theme.colors.gray500} fontSize="md">
        {customer.email}
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
          onClick={openModal}
        >
          Delete
        </Button>
      </Td>
    </Tr>
  );
};

export default Customers;
