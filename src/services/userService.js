import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../utils/auth.js'
const prisma = new PrismaClient();

export async function registerUser({ name, email, password, phone }) {
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
        data: {
            name, email,phone, password: hashedPassword,
        }
    })
    return { name: newUser.name, email: newUser.email, phone: newUser.phone }
}