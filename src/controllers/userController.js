import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const postRegisterTourist = async (req, res) => {
    const { name, email, password,phone } = req.body
    try {
        const register = await prisma.user.create({
            data: {
                name, email, password,phone
            }
        })
        res.status(201).json(register)
    } catch (error) {
        res.status(500).json({
            message: "erro ao criar usuario!",
            error: error.message
        })
    }
}