import React from "react";
import Addbook from "../Components/Addbook";
import Showbook from "../Components/Showbook";
import { Client, getUser } from "../trpc";
import { Grid, GridItem } from "@chakra-ui/react";
import Showbookmodel from "../Components/Showbookmodel";

const Home = () => {
  const [book, setBooks] = React.useState([]);
  const [iscreated,setIsCreated] = React.useState(false)


  React.useEffect(() => {
    
 getUser(setBooks)
  }, [iscreated]);
  
  return (
    <div>
      {/*  */}
      <Grid border={"1px solid black"} gap={6} templateColumns='repeat(3, 1fr)'>
      {
        book?.map((el,index)=>{
          return <Showbookmodel el={el} key={index}></Showbookmodel>
        })
      }
      <Addbook iscreated={iscreated} setIsCreated={setIsCreated}></Addbook>
        </Grid>
      
    </div>
  );
};

export default Home;
