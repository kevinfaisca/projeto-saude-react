"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { pessoaSchema } from "@/lib/schemas/pessoaSchema" 
import { z } from "zod"

type PessoaFormData = z.infer<typeof pessoaSchema>

export default function PessoaPage(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PessoaFormData>({
        resolver: zodResolver(pessoaSchema)
    })

    function onSubmit(data: PessoaFormData){
        console.log(data)
    }

    return(
        <div>
            <h1 className="text-xl font-semibold mb-4">Cadastro de Pessoa</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* campos virão aqui */}
            </form>
        </div>
    )
}