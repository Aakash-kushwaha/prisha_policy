import { t } from "../trpc";
import { z } from "zod";
import { usersRouter } from "./users";
const { seq, Users } = require("../config");

export const appRouter = t.router({
  greeting: t.procedure.query(async (req) => {
    const queryparam = req;
    const allData = await Users.findAll();
    return allData;
  }),
  book: t.procedure
    .input(
      z.object({
        name: z.string(),
        author: z.string(),
        book_read_times: z.string(),
        book_details: z.string(),
        pdf: z.string(),
        cover: z.string(),
      })
    )
    .mutation(async (req) => {
      const body = req.input;
      // console.log(body, "body");
      await Users.create(body);
      console.log(req.input);
      return { message: "user created", user: req.input };
    }),
  updaterating: t.procedure
    .input(z.object({ rating: z.number(), id: z.any() }))
    .query(async(requestObj) => {
      console.log(requestObj, "reqobj");
      Users.update(
        {rating: requestObj.input.rating },{
          where: {
            userId: requestObj.input.id,
          },
        }
      );
     return {message:"rating updated",rating:requestObj.input.rating}
    }),
});

export type AppRouter = typeof appRouter;
