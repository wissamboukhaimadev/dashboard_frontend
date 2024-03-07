"use client"

import { CardsFirstFloor } from "@/components/custom/CardsFirstFloor";
import { ChartsData } from "@/components/custom/ChartsData";
import { NavBar } from "@/components/custom/NavBar";
import { SideNav } from "@/components/custom/SideNav";

export default function GEDepartment() {
    return (
        <main >
            <NavBar />
            <div className="flex ">
                <div className="w-20 ">
                    <SideNav />
                </div>
                <div className="mx-28 mt-10 w-full" >


                    <CardsFirstFloor />

                    <ChartsData />
                </div>
            </div>
        </main>
    )
}