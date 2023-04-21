import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type {AppRouter} from "../../server/routers"


export const Client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8080/trpc",
    }),
  ],
})

export const getUser = async (setBooks) => {
  try {
    const allData = await Client.greeting.query();
    console.log(allData, "alldata");
    setBooks(allData);
  } catch (err) {
    console.log("err:", err);
  }
};