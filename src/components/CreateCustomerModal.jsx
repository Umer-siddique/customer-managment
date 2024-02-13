import {
  Box,
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useTheme,
} from "@chakra-ui/react";

const CreateCustomerModal = ({ openModal, closeModal }) => {
  const theme = useTheme();

  const handleUploadPhoto = () => {
    // Simulate clicking on a file input
    document.getElementById("file-input").click();
  };

  return (
    <Modal isOpen={openModal} onClose={closeModal} size="md">
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
  );
};

export default CreateCustomerModal;
