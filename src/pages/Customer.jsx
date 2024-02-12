// import {
//   Box,
//   Button,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   IconButton,
//   Icon,
//   useTheme,
// } from "@chakra-ui/react";
// import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
// import React from "react";

// const Customer = () => {
//   const theme = useTheme();
//   return (
//     <Box color={"red"} p={4}>
//       {/* Create New Customer Button */}
//       <Button
//         mb={4}
//         colorScheme="green"
//         leftIcon={<Icon as={MdAdd} />}
//         backgroundImage={theme.colors.buttonGradientBackground}
//       >
//         Create New Customer
//       </Button>

//       {/* Table */}
//       <Table variant="simple">
//         <Thead bg={theme.colors.green500}>
//           <Tr>
//             <Th color={theme.colors.green400} textTransform={"capitalize"}>
//               Profile
//             </Th>
//             <Th color={theme.colors.green400} textTransform={"capitalize"}>
//               Username
//             </Th>
//             <Th color={theme.colors.green400} textTransform={"capitalize"}>
//               Customer Name
//             </Th>
//             <Th color={theme.colors.green400} textTransform={"capitalize"}>
//               Email
//             </Th>
//             <Th color={theme.colors.green400} textTransform={"capitalize"}>
//               Actions
//             </Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {/* Manually filled table rows */}
//           <Tr>
//             <Td>
//               <img src="profile1.jpg" alt="Profile" width="50" height="50" />
//             </Td>
//             <Td color="gray.500">john_doe</Td>
//             <Td>John Doe</Td>
//             <Td color="green.500">john.doe@example.com</Td>
//             <Td>
//               <IconButton
//                 aria-label="Edit"
//                 icon={<Icon as={MdEdit} />}
//                 bg="green.500"
//                 color="white"
//                 mr={2}
//               />
//               <IconButton
//                 aria-label="Delete"
//                 icon={<Icon as={MdDelete} />}
//                 bg="red.500"
//                 color="white"
//               />
//             </Td>
//           </Tr>
//           <Tr>
//             <Td>
//               <img src="profile2.jpg" alt="Profile" width="50" height="50" />
//             </Td>
//             <Td color="gray.500">jane_smith</Td>
//             <Td>Jane Smith</Td>
//             <Td color="green.500">jane.smith@example.com</Td>
//             <Td>
//               <IconButton
//                 aria-label="Edit"
//                 icon={<Icon as={MdEdit} />}
//                 bg="green.500"
//                 color="white"
//                 mr={2}
//               />
//               <IconButton
//                 aria-label="Delete"
//                 icon={<Icon as={MdDelete} />}
//                 bg="red.500"
//                 color="white"
//               />
//             </Td>
//           </Tr>
//         </Tbody>
//       </Table>
//     </Box>
//   );
// };

// export default Customer;

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
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import React from "react";

const Customer = () => {
  const theme = useTheme();

  return (
    <Box p={4}>
      {/* Create New Customer Button */}
      <Button
        mb={6}
        p={4}
        colorScheme="green"
        leftIcon={<Icon as={MdAdd} />}
        backgroundImage={theme.colors.buttonGradientBackground}
        textTransform={"uppercase"}
      >
        Add New Customer
      </Button>

      {/* Table */}
      <Table variant="simple">
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
              <Button size="sm" bg={"red.100"} color="red" w={"100px"} ml={4}>
                Delete
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Customer;
