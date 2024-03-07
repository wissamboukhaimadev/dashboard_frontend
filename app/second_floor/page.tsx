"use client"

import { CardsSecondFloor } from "@/components/custom/CardsSecondFloor";
import { ChartsData } from "@/components/custom/ChartsData";
import { NavBar } from "@/components/custom/NavBar";
import { SideNav } from "@/components/custom/SideNav";

export default function SecondFloor() {
    return (
        <main >
            <NavBar />
            <div className="flex ">
                <div className="w-20 ">
                    <SideNav />
                </div>
                <div className="mx-28 mt-10 w-full" >


                    <CardsSecondFloor />

                    <ChartsData />
                </div>
            </div>
        </main>
    )
}