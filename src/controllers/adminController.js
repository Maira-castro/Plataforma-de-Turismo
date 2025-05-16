import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import bcrypt from 'bcrypt' //AQUI SERA FEITA A CRIPTOGRAFIA DA SENHA
import {hashPassword,generateToken} from '../utils/auth.js'
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

export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body; //passo o email e senha 
    
        const usuario = await prisma.admin.findUnique({ where: { email } });// Verifica se o usuário existe com base no email

        if (!usuario) {
            return res.status(401).json({ message: "email inválidas!" });
        }//se nao encontrar usuario
    
        const senhaValida = await bcrypt.compare(password, usuario.password);// Compara a senha fornecida com a senha hasheada do banco

        if (!senhaValida) {
            return res.status(401).json({ message: "senha inválidas!" });
        }//se as senhas não estiverem iguais

        const token = generateToken(usuario);// Gera o token JWT

        res.status(200).json({
            message: "Login realizado com sucesso!",
            usuario:{name:usuario.name,email:usuario.email},
            token: token,
        });
        
        
    } catch (error) {
        res.status(500).json({
            message: "Erro ao fazer login",
            detalhes: `${error.message}\n${error.stack}`,
        });
    }
};

