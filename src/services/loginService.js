import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import { generateToken } from '../utils/auth.js'

export async function LoginService(email, password) {
    let usuario = await prisma.user.findUnique({ where: { email } });
    let tipo = "user";

    if (!usuario) {
        // Se não achou em user, tenta em admin
        usuario = await prisma.admin.findUnique({ where: { email } });
        tipo = "admin";
    }

    if (!usuario) {
        throw new Error("Credenciais não encontradas!");
    }

    const senhaValida = await bcrypt.compare(password, usuario.password);
    if (!senhaValida) {
        throw new Error("Credenciais não encontradas!");
    }

    const token = generateToken(usuario); // Gera o token JWT

    return {
        name: usuario.name, email: usuario.email, tipo, token
    }
}

export async function existeEmail(email) {
    const user = await prisma.user.findUnique({
        where: { email }
    })
    const admin = await prisma.admin.findUnique({
        where: { email }
    })
    return admin || user
}