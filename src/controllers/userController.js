import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

import bcrypt from 'bcrypt' //AQUI SERA FEITA A CRIPTOGRAFIA DA SENHA
import {hashPassword,generateToken} from '../utils/auth.js'
export const postRegisterTourist = async (req, res) => {
    const { name, email, password,phone } = req.body
    try {
        //criar a senha do usuário hasheada
        const hashedPassword = await hashPassword(password)

        //cria o usuario no banco de dados
        //onde iremos guardar a senha já hasheada
        const newRegistedUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                phone:phone
            }
        })

        res.status(201).json({
            name: newRegistedUser.name,
            email: newRegistedUser.email,
            phone: newRegistedUser.phone,
        })
    } catch (error) {
        res.status(400).json({
            message: "erro ao registrar usuario!",
            detalhes: `${error.message} \n ${error.stack}`,

        })
    }
}