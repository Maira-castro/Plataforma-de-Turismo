import express from "express"
import { loginAdmin } from "../controllers/adminController.js"
import { loginUser } from "../controllers/userController.js"
const router = express.Router()

router.post("/auth/login",loginAdmin)
router.post("/auth/user/login",loginUser)
export default router