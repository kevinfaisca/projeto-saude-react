"use client"

import {useState} from "react"
import Link from "next/link"

export function Sidebar(){
    const [open, setOpen] = useState(true)

    return (
        <aside className={`${open ? "w-64": "w-16"} border-r min-h-screen transition-all`}  >
            <div className="p-4">
                <button onClick={() => setOpen(!open)} className="text-sm font-medium">
                    {open ? "Fechar" : "Abrir"}
                </button>
            </div>
            <nav className="px-4">
                <ul className="space-y-2">
                    <li>
                        <Link href="/">
                            {open && "Dashboard"}
                        </Link>
                    </li>
                    <li className="font-medium">
                        {open && "Cadastro"}
                    </li>
                    <li className="ml-4">
                        <Link href="/cadastro/pessoa">
                            {open && "Pessoa"}
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
} 