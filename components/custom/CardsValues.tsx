import { Thermometer } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

export function CardsValues() {
    return (
        <div>
            <Card className="py-5 px-7 shadow-lg rounded-lg">
                <div className="flex">
                    <CardTitle>
                        <p>Tempurature</p>
                    </CardTitle>
                    <Thermometer className="ml-10" size={30} />
                </div>
                <CardDescription className="pt-2">
                    <p>30°</p>
                </CardDescription>
                <CardDescription className="pt-2">
                    <Progress value={33} />
                </CardDescription>
            </Card>
        </div>
    )
}