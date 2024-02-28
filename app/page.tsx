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
          <div className="mx-20 grid grid-cols-3 gap-4">
            {Array.from([1, 2, 3, 4]).map(index => (
              <CardsValues key={index} />
            ))}
          </div>

          <ChartsData />
        </div>
      </div>
    </main>
  );
}
