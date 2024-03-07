"use client"

import { CardAmphie } from "@/components/custom/CardAmphi"
import { ChartTemperatureHumidity } from "@/components/custom/ChartTemperatureH"
import { NavBar } from "@/components/custom/NavBar"
import { SideNav } from "@/components/custom/SideNav"

export default function AmphiClass() {
    return (
        <main >
            <NavBar />
            <div className="flex ">
                <div className="w-20 ">
                    <SideNav />
                </div>
                <div className=" mx-28 mt-10 w-full" >


                    <CardAmphie />

                    <ChartTemperatureHumidity />
                </div>
            </div>
        </main>
    )
}