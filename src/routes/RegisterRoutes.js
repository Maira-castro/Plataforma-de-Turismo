import express from "express"
import { postRegisterTourist } from "../controllers/userController.js"
const router = express.Router()

//ROTA DE REGISTRO DE TURISTA
router.post("/auth/register",postRegisterTourist)
export default router