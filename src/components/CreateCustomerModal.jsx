import { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { useCreateCustomerMutation } from "../services/customersApi";

const CreateCustomerModal = ({ openModal, closeModal }) => {
  const theme = useTheme();
  const toast = useToast();
  const [username, setUsername] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [createCustomer, { isLoading }] = useCreateCustomerMutation();

  const handleUploadPhoto = (event) => {
    setPhoto(event.target.files[0]);
  };

  const clearForm = () => {
    setUsername("");
    setCustomerName("");
    setEmail("");
    setPhoto("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("customerName", customerName);
    formData.append("email", email);
    if (photo) {
      formData.append("profileImg", photo);
    }
    try {
      await createCustomer(formData).unwrap();
      toast({
        title: "Customer Created.",
        description: "Customer created successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      closeModal();
      clearForm();
    } catch (err) {
      console.log(err);
      toast({
        title: "An error occurred.",
        description: err?.data?.message || "Unable to create customer.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
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
          <form onSubmit={handleSubmit}>
            <Box mb={6} mt={8}>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Username"
                  className="input-field"
                  borderRadius="md"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                onChange={handleUploadPhoto}
                accept="image/*"
              />
              <span
                onClick={() => document.getElementById("file-input").click()}
              >
                Upload Photo
              </span>
            </Box>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="green"
            backgroundImage={theme.colors.buttonGradientBackground}
            isLoading={isLoading}
            loadingText="Creating..."
            textTransform="uppercase"
            width="100%"
            borderRadius="md"
            mb={6}
            onClick={handleSubmit}
          >
            Add Customer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateCustomerModal;
