import { LayoutDashboard, Users, Stethoscope } from "lucide-react";

export interface MenuItem{
    label: string;
    icon: React.ElementType;
    path?: string;
    children?:{
        label: string;
        path: string;
    }[];
}

export const menuItems: MenuItem[] = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        path: '/',
    },
    {
        label: 'Cadastro',
        icon: Users,
        children: [
            {label: 'Pessoa', path: '/cadastro/pessoa'},
            {label: 'Família', path: '/cadastro/familia'},
        ],
    },
    {
        label: 'Atendimento',
        icon: Stethoscope,
        children:[
            {label: 'Prontuário', path: '/atendimento/prontuario'},
        ],
    },
];