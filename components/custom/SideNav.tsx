import { AreaChart, LayoutDashboard, School } from "lucide-react";

export function SideNav() {
    return (
        <div className="py-10 mx-1 flex flex-col bg-purple-500 justify-center items-center rounded-full">
            <LayoutDashboard className="mb-5 text-white " size={30} />
            <AreaChart className="mb-5 text-white" size={30} />
            <School className="text-white" size={30} />
        </div>
    )
}