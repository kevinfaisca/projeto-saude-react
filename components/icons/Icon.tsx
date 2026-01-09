"use client"

import {
    LayoutDashboard,
    Users,
    User,
    ClipboardList,
    ChevronDown,
    ChevronRight,
    Menu,
} from "lucide-react"

type IconName = 
    | "dashboard"
    | "users"
    | "user"
    | "prontuario"
    | "chevron-down"
    | "chevron-right"
    | "menu";

interface IconProps{
    name: IconName;
    size?: number;
    className?: string;
}

const iconsMap ={
    dashboard: LayoutDashboard,
    users: Users,
    user: User,
    prontuario: ClipboardList,
    "chevron-down": ChevronDown,
    "chevron-right": ChevronRight,
    menu: Menu,
}

export function Icon ({name, size=20, className}: IconProps){
    const Icon = iconsMap[name];

    if (!Icon){
        return null;
    }

    return <Icon size={size} className={className}/>
}