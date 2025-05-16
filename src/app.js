import express from "express"
import UserRouter from "./routes/RegisterRoutes.js"

const app = express()
 app.use(express.json())
 app.use("/user",UserRouter)

 export default app 