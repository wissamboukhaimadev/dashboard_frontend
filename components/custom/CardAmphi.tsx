import { Card, CardDescription, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { ThermometerIcon } from "../icons/Thermometer";
import { HumidityIcon } from "../icons/HumidityIcon";
import { CO2Icon } from "../icons/Co2Icon";

export function CardAmphie() {
    return (
        <div className="mx-20 grid grid-cols-2 gap-10">
            <Card className="py-5 px-7 shadow-lg rounded-lg cursor-pointer hover:scale-110 transition-all">
                <div className="flex justify-between">
                    <CardTitle>
                        <p>Tempurature</p>
                    </CardTitle>
                    <ThermometerIcon />
                </div>
                <CardDescription className="pt-2">
                    <p>31°</p>
                </CardDescription>
                <CardDescription className="pt-5">
                    <Progress value={33} indicatorColor="bg-blue-500" forgroundColor="bg-white" className="shadow-xl " />
                </CardDescription>
            </Card>
            <Card className="py-5 px-7 shadow-lg rounded-lg cursor-pointer hover:scale-110 transition-all">
                <div className="flex justify-between">
                    <CardTitle>
                        <p>Humidity</p>
                    </CardTitle>
                    <HumidityIcon />
                </div>
                <CardDescription className="pt-2">
                    <p>27%</p>
                </CardDescription>
                <CardDescription className="pt-5">
                    <Progress value={27} indicatorColor="bg-orange-400" forgroundColor="bg-white" className="shadow-xl " />
                </CardDescription>
            </Card>
            <Card className="py-5 px-7 shadow-lg rounded-lg cursor-pointer hover:scale-110 transition-all col-span-2 row-span-2">
                <div className="flex justify-between">
                    <CardTitle>
                        <p>CO<sub>2</sub></p>
                    </CardTitle>
                    <CO2Icon />
                </div>
                <CardDescription className="pt-2">
                    <p>17%</p>
                </CardDescription>
                <CardDescription className="pt-5">
                    <Progress value={17} indicatorColor="bg-gray-400" forgroundColor="bg-white" className="shadow-xl " />
                </CardDescription>
            </Card>



        </div>
    )
}