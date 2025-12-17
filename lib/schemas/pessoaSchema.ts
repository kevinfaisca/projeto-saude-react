import {z} from 'zod'

export const pessoaSchema = z.object({
    nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: z.email('Email inválido'),
})