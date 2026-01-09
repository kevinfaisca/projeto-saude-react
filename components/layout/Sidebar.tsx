"use client"

import { useEffect, useState} from 'react';
import { usePathname} from 'next/navigation';
import Link from "next/link"
import { ChevronDown } from 'lucide-react';
import { menuItems} from '@/config/menu';

type SidebarProps = {
    open: boolean
}

export function Sidebar({open}: SidebarProps){

    return (
        <aside className={`${open ? "w-64": "w-18"} bg-blue-700 text-white transition-all duration-300`}  >
            <nav className="p-4">
                <ul className="space-y-4 text-base">
                    <li>
                        <Link href="/" className="flex items-center gap-3 p-2 rounded hover:bg-blue-600 transition">
                            <LayoutDashboard size={30} />
                            {open && "Dashboard"}
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center gap-3 font-semibold text-blue-100 px-2">
                            <Users size={30} />
                            {open && "Cadastro"}
                        </div>
                        {open && (
                            <ul className="mt-2 space-y-1 ml-6">
                                <li>
                                    <Link href="/cadastro/pessoa" className="flex items-center gap-3 p-2 rounded hover:bg-blue-600 transition">
                                        <User size={20} />
                                        {open && "Pessoa"}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cadastro/familia" className="flex items-center gap-3 p-2 rounded hover:bg-blue-600 transition">
                                        <Home size={20} />
                                        {open && "Família"}
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <div className="flex items-center gap-3 font-semibold text-blue-100 px-2">
                            <Stethoscope size={30} />
                            {open && "Atendimento"}
                        </div>
                        <ul className="mt-2 space-y-1 ml-6">
                            <li>
                                <Link href="/atendimento/prontuario" className="flex items-center gap-3 p-2 rounded hover:bg-blue-600 transition">
                                    <Stethoscope size={20} />
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