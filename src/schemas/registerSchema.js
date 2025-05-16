import { z } from "zod"

export const RegisterUserSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string().regex(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, {
        message: 'Telefone inválido. Use o formato (99) 99999-9999 ou similar',
    }),
    password: z.string().min(8).regex(/[A-Za-z]/)

})

export const RegisterAdminSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8).regex(/[A-Za-z]/)
})