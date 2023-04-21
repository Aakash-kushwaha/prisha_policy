import React from "react";
import styles from "./showbook.module.css";
import { Box, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { updateRating } from "../trpc";

const Showbook = ({ el }) => {
  const [ind, setInd] = React.useState();
  const [data, setData] = React.useState({ ...el });
  const [rate, setRate] = React.useState(false);

  React.useEffect(()=>{
   if(ind) updateRating(el.userId,ind)
  },[ind])
  return (
    <div className={styles.container}>
      <div className={styles.imgdiv}>
        <img src={data.cover}></img>
      </div>
      <div>
        <p>{data.name}</p>
        <p>{data.author}</p>
        <p>Book Read Time :{
        Math.floor(data.book_read_times)%60
        } hours</p>
        <p>{data.book_details}</p>
        <p>Ratings :{ind?ind: data.rating}</p>

        {rate ? (
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  id={i}
                  color={
                    ind != null
                      ? i < ind
                        ? "teal.500"
                        : "gray.300"
                      : i < data.rating
                      ? "teal.500"
                      : "gray.300"
                  }
                  onClick={() => setInd(i+1)}
                />
              ))}
          </Box>
        ) : (
          ""
        )}
        <Button onClick={() => setRate(true)}>Rate this book</Button>
        <br></br>
        <br></br>
        <a href={el.pdf} target="_blank">Read this book</a>
      </div>
    </div>
  );
};

export default Showbook;
