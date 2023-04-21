import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Box,
  } from "@chakra-ui/react";

  import React from "react";
import Showbook from "./Showbook";

 
  function Showbookmodel({el}) {
    // createUser()
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box marginTop={"2rem"}>
        <Button
          w="30vh"
          h="40vh"
          bg="White"
          onClick={onOpen}
        >
          <img height={"500px"}
            src={el.cover}
          />
          
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="full"
      
        >
          <ModalOverlay />
          <ModalContent marginTop={"3rem"}  border={"1px solid blue"}>
            <ModalBody>
              <Button colorScheme="teal" size="md" onClick={onClose}>
                Back to home
              </Button>
              <Showbook el={el}></Showbook>
            </ModalBody>
           
          </ModalContent>
        </Modal>
      </Box>
    );
  }
  export default Showbookmodel;
  