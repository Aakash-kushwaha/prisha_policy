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
} from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import React from "react";
import styles from "./Model.module.css";
import { useState } from "react";
import { uploadFile } from "../utils/upload";
import { Client } from "../trpc";

const createUser = async(formdata)=>{
  const newUser = await Client.book.mutate({...formdata})
  console.log(newUser,"newuser")

  // const allData = await Client.greeting.query()
  // console.log(allData,"alldata")
}




function Addbook({iscreated,setIsCreated}) {
  // createUser()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formdata, setFormdata] = useState({
    name:"",
    author:"",
    book_read_times:"",
    book_details:"",
    pdf:"",
    cover:""
  });
  const [isLoading,setIsloading]= React.useState(false)

  const handelChange = (e) => {
    let x = e.target;
    setFormdata({ ...formdata, [x.name]: x.value });
  };

  
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formdata,"formdata_sumbit")
    createUser(formdata)
  };

  const handleFileInputChange=(e)=>{
    console.log("heelo")
     uploadFile(e.target.files[0],e.target.name,setFormdata,formdata,setIsloading)
  }

  return (
    <>
      <Button
        w="30vh"
        h="40vh"
        bg="White"
        onClick={onOpen}
        style={{ display: "grid", gridTemplateColumn: "repeat(1,1fr)" }}
      >
        <img
          h="5vh"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vf88PULbuTH_SdVz2vWnYq0bW1Acq9yBCc_PFo6Mxp8qnN1Y9q-SZ0v6Px5o4AVTTg0&usqp=CAU"
        />
        <p style={{ marginTop: "-10vh" }}>Add New Book </p>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        className={styles.ModelMainDiv}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Button colorScheme="teal" size="md" onClick={()=>{onClose();setIsCreated(!iscreated)}}>
              Back to home
            </Button>
            <form onSubmit={handelSubmit} className={styles.Modelform}>
              <div className={styles.ImageDiv}>
                <label htmlFor="file_upload" className={styles.custom_file_upload}>
                  <i className={styles.fa_cloud_upload}></i> Upload Cover Image
                  <input id={styles.file_upload} type="file" name="cover" onChange={handleFileInputChange} required/>
                </label>
              </div>
              <div className={styles.FormdataDiv}>
                <p>Name of Book</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter the published name"
                 onChange={handelChange} required
                />
                <br />
                <div className={styles.author_time}>
                  <div>
                    <p>Author of the Book</p>
                    <Input
                      type="text"
                      name="author"
                      placeholder="Add all the authors comma seperated"
                     onChange={handelChange} required
                    />
                  </div>
                  <div>
                    <p>Book read Time</p>
                    <Input
                      type="number"
                      name="book_read_times"
                      placeholder="Insert the book read time"
                     onChange={handelChange} required
                    />
                  </div>
                </div>
                <p>Book Details</p>
                {isLoading?
                <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />:""
                }
                <textarea
                  type="textarea"
                  name="book_details"
                  placeholder="Add all the authors comma seperated"
                 onChange={handelChange} required
                  style={{
                    width: "600px",
                    height: "200px",
                    border: "1px solid black",
                  }}
                />
                <div>
                <label htmlFor="pdf_upload" className={styles.custom_pdf_upload}>
                  <i ></i> Upload PDF file
                  <input id={styles.pdf_upload} type="file" name="pdf" onChange={handleFileInputChange} required />
                </label>
                </div>
                
                <input style={{width:"150px",background:"teal",color:"white"}} type="submit" value={"Add book"}></input>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Addbook;
