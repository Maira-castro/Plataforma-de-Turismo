import express from "express"
import RegisterRoutesRouter from "./routes/RegisterRoutes.js"

const app = express()
 app.use(express.json())
 app.use("/register",RegisterRoutesRouter)

 export default app 