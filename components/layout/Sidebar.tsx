"use client"

import Link from "next/link"
import {LayoutDashboard,Users,User,Home,Stethoscope} from "lucide-react"

type SidebarProps = {
    open: boolean
}

export function Sidebar({open}: SidebarProps){

    return (
        <aside className={`${open ? "w-64": "w-16"} bg-blue-700 text-white transition-all duration-300`}  >
            <nav className="p-4">
                <ul className="space-y-4 text-sm">
                    <li>
                        <Link href="/" className="flex items-center gap-3 p-2 rounded hover:bg-blue-600 transition">
                            <LayoutDashboard size={20} />
                            {open && "Dashboard"}
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center gap-3 font-semibold text-blue-100 px-2">
                            <Users size={20} />
                            {open && "Cadastro"}
                        </div>
                        {open && (
                            <ul className="mt-2 space-y-1 ml-6">
                                <li>
                                    <Link href="/cadastro/pessoa" className="flex items-center gap-3 p-2 rounded hover:bg-blue-600 transition">
                                        <User size={18} />
                                        {open && "Pessoa"}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cadastro/familia" className="flex items-center gap-3 p-2 rounded hover:bg-blue-600 transition">
                                        <Home size={18} />
                                        {open && "Família"}
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <div className="flex items-center gap-3 font-semibold text-blue-100 px-2">
                            <Stethoscope size={20} />
                            {open && "Atendimento"}
                        </div>
                        <ul className="mt-2 space-y-1 ml-6">
                            <li>
                                <Link href="/atendimento/prontuario" className="flex items-center gap-3 p-2 rounded hover:bg-blue-600 transition">
                                    <Stethoscope size={18} />
                                    {open && "Prontuário"}
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    )
} 