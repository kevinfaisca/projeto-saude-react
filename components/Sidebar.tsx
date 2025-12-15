"use client"

import {useState} from "react"

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
                    <li>{open && "Dashboard"}</li>
                    <li>{open && "Cadastro"}</li>
                </ul>
            </nav>
        </aside>
    )
} 