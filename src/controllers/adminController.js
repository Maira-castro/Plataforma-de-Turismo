import { PrismaClient } from "@prisma/client";
import {hashPassword} from '../utils/auth.js'
const prisma = new PrismaClient()


export const postRegisterAdmin = async (req, res) => {
    const { name, email, password } = req.body
    try {
        //criar a senha do usuário hasheada
        const hashedPassword = await hashPassword(password)

        //cria o usuario no banco de dados
        //onde iremos guardar a senha já hasheada
        const newRegistedUser = await prisma.admin.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        })

        res.status(201).json({
            name: newRegistedUser.name,
            email: newRegistedUser.email,

        })
    } catch (error) {
        res.status(400).json({
            message: "erro ao registrar usuario!",
            detalhes: `${error.message} \n ${error.stack}`,

        })
    }
}


