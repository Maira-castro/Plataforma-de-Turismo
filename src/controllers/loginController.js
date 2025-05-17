import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import {generateToken} from '../utils/auth.js'

export const login = async (req, res) => {
    const { email, password } = req.body;

    let usuario = await prisma.user.findUnique({ where: { email } });
    let tipo = "user";

    if (!usuario) {
        // Se não achou em user, tenta em admin
        usuario = await prisma.admin.findUnique({ where: { email } });
        tipo = "admin";
    }

    if (!usuario) {
        return res.status(401).json({ message: "Credenciais não encontradas!" });
    }

    const senhaValida = await bcrypt.compare(password, usuario.password);
    if (!senhaValida) {
        return res.status(401).json({ message: "Credenciais não encontradas!" });
    }

    const token = generateToken(usuario); // Gera o token JWT

    res.status(200).json({
        message: "Login realizado com sucesso!",
        usuario: { name: usuario.name, email: usuario.email, tipo },
        token: token,
    });
};
