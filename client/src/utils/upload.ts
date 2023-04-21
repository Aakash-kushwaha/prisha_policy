import { storage } from '../firebase'

export  const uploadFile=(image,name,setFormdata,formdata,setIsloading)=>{
    setIsloading(true)
    storage.ref(`/prisha_storage/${image.name}`).put(image)
    .on("state_changed",alert("uploading"),alert,async()=>{
     const Url = await storage.ref("prisha_storage").child(image.name).getDownloadURL()
     console.log(name,Url,"url")
      setFormdata({ ...formdata, [name]: Url })
      setIsloading(false)
     })
   return
 }


