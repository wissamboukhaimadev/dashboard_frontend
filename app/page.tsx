"use client"
import { CardsValues } from "@/components/custom/CardsValues";
import { ChartsData } from "@/components/custom/ChartsData";
import { NavBar } from "@/components/custom/NavBar";
import { SideNav } from "@/components/custom/SideNav";


export default function Home() {
  return (
    <main >
      <NavBar />
      <div className="flex ">
        <div className="w-20 ">
          <SideNav />
        </div>
        <div className="ml-20 mt-10" >


          <CardsValues />

          <ChartsData />
        </div>
      </div>
    </main>
  );
}
