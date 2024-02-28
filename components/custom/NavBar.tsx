import { Moon } from "lucide-react"

export function NavBar() {
    return (
        <div className="flex justify-between px-10 pt-10 ">
            <div></div>
            <div className="flex ">
                <p className="pr-5">navigation</p>
                <Moon className="hover:cursor-pointer" />
            </div>
        </div>
    )
}