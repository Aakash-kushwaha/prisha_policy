import { t } from "../trpc"
import { string, z } from "zod"
import { randomUUID } from "crypto"
const {Users} = require("../config")


export const usersRouter = t.router({
  create: t.procedure
    .input(z.object({ name: z.string(), author: z.string(),book_read_times:z.string(),book_details:z.string(),pdf:z.string(),cover:z.string() }))
    .mutation( async(req)=>{
      const body = req.input
      console.log(body,"body")
      await Users.create(body);
      console.log(req.input)
      return "User Created"
    }),
  updaterating:t.procedure.input(z.object({ rating: z.number() }))
  .query(requestObj => {
    return requestObj    
    
        // Users.update(
        //     {password},
        //     {
        //     where: {
        //       userId:id
        //     }
        //   })
        //   res.send("sucess")
    

  })
})
