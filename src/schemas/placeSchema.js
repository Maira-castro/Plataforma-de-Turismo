import { z } from 'zod'

export const CreatePlaceSchema = z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
    description: z.string().min(10, 'A descrição deve ter no mínimo 10 caracteres'),
    address: z.string().min(10, 'O endereço deve ter no mínimo 10 caracteres'),
    type: z.string().min(5, "Tipo deve ter no mínimo 5 letras, ex: 'hotel'"),
    rating: z.number().gte(0, 'A avaliação mínima é 0').lte(5, 'A avaliação máxima é 5')
})

export const UpdatePlaceSchema = z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres").optional(),
    description: z.string().min(10, 'A descrição deve ter no mínimo 10 caracteres').optional(),
    address: z.string().min(10, 'O endereço deve ter no mínimo 10 caracteres').optional(),
    type: z.string().min(5, "Tipo deve ter no mínimo 5 letras, ex: 'hotel'").optional(),
    rating: z.number().gte(0, 'A avaliação mínima é 0').lte(5, 'A avaliação máxima é 5').optional()
})