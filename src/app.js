import express from "express"
import RegisterRoutesRouter from "./routes/RegisterRoutes.js"
import placeRouter from "./routes/placeRouter.js"

const app = express()
 app.use(express.json())
 app.use("/register",RegisterRoutesRouter)
 app.use("/place",placeRouter)
 export default app 