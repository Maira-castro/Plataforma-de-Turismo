import express from "express"
import { postRegisterTourist } from "../controllers/userController.js"
import { postRegisterAdmin } from "../controllers/adminController.js"
const router = express.Router()

//ROTA DE REGISTRO DE TURISTA
router.post("/auth/register",postRegisterTourist)
//ROTA DE REGISTRO DE ADMINISTRADOR
router.post("/auth/register-adm",postRegisterAdmin)
export default router