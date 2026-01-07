"use client"
import { Menu } from "lucide-react"

type HeaderProps = {
    onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar}: HeaderProps){
    return (
        <header className="h-14 bg-blue-600 text-white flex items-center px-4 shadow-md">
            <button onClick={onToggleSidebar} className="p-2 rounded hover:bg-blue-500 transition">
                <Menu size={20}/>
            </button>
            <h1 className="ml-4 text-lg font-semibold">
                Sistema de Saúde
            </h1>
        </header>
    );
}