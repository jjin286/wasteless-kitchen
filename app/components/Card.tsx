import * as React from "react"
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function FeatureCard({image, text} : {image: string, text: string}){
    return(
        <Card className="card p-12 m-5 bg-[#daffd6] rounded content-center">
            <div className="image">
                <Image
                    src={image}
                    width={200}
                    height={200}
                    alt={text}
                    className="mx-auto"
                />
            </div>
            <div className="text pt-5 font-medium">
                <p>{text}</p>
            </div>
        </Card>
    );
}
// bg-[#dbdbdb]
// bg-[#daffd6]
// bg-[#adf08b]