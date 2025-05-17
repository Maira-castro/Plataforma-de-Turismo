import express from "express"
import { login } from "../controllers/loginController.js"
const router = express.Router()

router.post("/auth/login",login)

export default router