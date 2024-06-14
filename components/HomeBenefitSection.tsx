import Card from "./Card";

export default function BenefitSection(){
    return(
        <div className="benefits text-center content-center h-[80vh] pb-40 bg-green-300">
            <div className="h-1/3 content-center">
                <h3 className="text-3xl">Become a wasteless cook using Wasteless Kitchen!</h3>
            </div>
            <div className="flex justify-evenly h-2/3 ">
                <Card image="/recycle.png" text="Reduce food waste"/>
                <Card image="/money.png" text="Save money"/>
                <Card image="/cook-book.png" text="Try new recipes"/>
            </div>

        </div>
    );
}