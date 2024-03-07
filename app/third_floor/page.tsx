"use client"

import { CardsThirdFloor } from "@/components/custom/CardsThirdFloor";
import { ChartsData } from "@/components/custom/ChartsData";
import { NavBar } from "@/components/custom/NavBar";
import { SideNav } from "@/components/custom/SideNav";

export default function ThirdFloor() {
    return (
        <main >
            <NavBar />
            <div className="flex ">
                <div className="w-20 ">
                    <SideNav />
                </div>
                <div className="mx-28 mt-10 w-full" >


                    <CardsThirdFloor />

                    <ChartsData />
                </div>
            </div>
        </main>
    )
}