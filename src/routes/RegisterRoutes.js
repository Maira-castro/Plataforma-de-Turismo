import express from "express"
import { postRegisterTourist } from "../controllers/userController.js"
import { postRegisterAdmin } from "../controllers/adminController.js"
import { validate } from "../middleware/validate.js"
import { RegisterAdminSchema, RegisterUserSchema } from "../schemas/registerSchema.js"
const router = express.Router()

//ROTA DE REGISTRO DE TURISTA
router.post("/auth/register",validate(RegisterUserSchema), postRegisterTourist)
//ROTA DE REGISTRO DE ADMINISTRADOR
router.post("/auth/register-adm",validate(RegisterAdminSchema),postRegisterAdmin)
export default router