import {
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { BsTrash3 } from "react-icons/bs";

const DeleteModal = ({ openModal, closeModal }) => {
  return (
    <Modal isOpen={openModal} onClose={closeModal} size="md">
      <ModalOverlay />
      <ModalContent borderRadius="xl" p={8}>
        <ModalHeader>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
            pb={4}
          >
            <Icon as={BsTrash3} color="red" fontSize="3em" mb={3} />
            <Box fontSize="2xl">Are you sure?</Box>
          </Box>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Box textAlign="center" fontWeight="medium" pb={4}>
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
                onClick={closeModal}
                borderRadius="md"
                width="100%"
              >
                Cancel
              </Button>
            </Box>
            <Box width="50%" textAlign="center" ml={2}>
              <Button bg="red.500" color="white" borderRadius="md" width="100%">
                Delete
              </Button>
            </Box>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
