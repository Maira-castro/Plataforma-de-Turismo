import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const postRegisterAdmin = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const register = await prisma.admin.create({
            data: {
                name, email, password
            }
        })
        res.status(201).json(register)
    } catch (error) {
        res.status(500).json({
            message: "erro ao criar Administrador!",
            error: error.message
        })
    }
}