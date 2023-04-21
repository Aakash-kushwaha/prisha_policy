import './App.css';
import React from "react"
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type {AppRouter} from "../../server/routers"
import { storage } from './firebase'

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
})

const getUser = async()=>{
  // const newUser = await client.book.mutate({name:"aakash",author:"author",book_read_times:"10",book_details:"details",pdf:"pdf",cover:"cover"})
  // console.log(newUser,"newuser")
  const allData = await client.greeting.query({rating:1})
  // console.log(allData,"alldata")
}



function App() {

  // const [image,setImage]=  React.useState("")
  const [Url,setUrl] = React.useState("")

  const handleFileInputChange=(e)=>{
    //  setImage(e.target.files[0])
     uploadFile(e.target.files[0])
  }

  const uploadFile=(image)=>{
      if(image==null) return

      setUrl("Getting url link..")
     storage.ref(`/resume_pdf/${image.name}`).put(image)
      .on("state_changed",alert("Success"),alert,async()=>{
      const Url = await storage.ref("resume_pdf").child(image.name).getDownloadURL()
      console.log(Url,"url")
      })
    
  }



getUser()
  return (
    <div className="App">
      <input type="file" onChange={(e)=>handleFileInputChange(e)} />
      <br></br>
      <br></br>
      <div>Get Url link</div>
      <a href={Url}>{Url}</a>
    </div>
  );
}

export default App;
