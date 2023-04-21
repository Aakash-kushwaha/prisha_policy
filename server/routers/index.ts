import { t } from "../trpc"
import { z } from "zod"
import { usersRouter } from "./users"
const {seq,Users} = require("../config")

export const appRouter = t.router({
  greeting: t.procedure
    .query(async(req) => {
      const queryparam = req
      console.log(queryparam,"queryparam")
      const allData =await Users.findAll()
      return allData
    }
    ),
  book: t.procedure
  .input(z.object({ name: z.string(), author: z.string(),book_read_times:z.string(),book_details:z.string(),pdf:z.string(),cover:z.string() }))
  .mutation( async(req)=>{
    const body = req.input
    console.log(body,"body")
    await Users.create(body);
    console.log(req.input)
    return {message:"user created",user:req.input}
  }),
  updaterating:t.procedure
  .input(z.object({ rating: z.number() }))
  .query(requestObj => {
    // console.log(requestObj,"reqobj")
    return requestObj.input    
    
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

export type AppRouter = typeof appRouter
