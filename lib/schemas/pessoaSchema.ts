import {z} from 'zod'

export const pessoaSchema = z.object({
    nome: z
        .string()
        .min(3, 'Nome deve ter pelo menos 3 caracteres'),
        
    email: z
        .email('Email inválido'),

    idade: z
        .number('Idade deve ser um número')
        .min(0, 'Idade não pode ser negativa')
        .max(120, 'Idade inválida'),
})

//tipo gerado automaticamente a partir do schema
export type PessoaFormData = z.infer<typeof pessoaSchema>