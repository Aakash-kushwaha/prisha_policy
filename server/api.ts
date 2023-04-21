import { createExpressMiddleware } from "@trpc/server/adapters/express"
import express from "express"
import cors from "cors"
import { appRouter } from "./routers"
const {seq} = require("./config")

const app = express()




app.use(express.json())
app.use(cors())

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: ({ req, res }) => {
      return {req,res}
    },
  })
)
app.listen(8080,async()=>{
  await seq.sync()
})
