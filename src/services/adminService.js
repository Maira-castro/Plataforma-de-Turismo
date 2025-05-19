import { PrismaClient } from '@prisma/client';
import {hashPassword} from '../utils/auth.js'
const prisma = new PrismaClient();


export async function registerAdmin({ name, email, password }) {
  const hashedPassword = await hashPassword(password);

  const newAdmin = await prisma.admin.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  return {
    name: newAdmin.name,
    email: newAdmin.email
  };
}