import Card from "./Card";

export default function BenefitSection(){
    return(
        <div className="benefits flex justify-evenly items-center text-center">
            <Card image="/next.svg" text="Reduce food waste"/>
            <Card image="/next.svg" text="Save money"/>
            <Card image="/next.svg" text="Try new recipes"/>
        </div>
    );
}