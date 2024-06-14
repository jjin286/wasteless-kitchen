import Card from "./Card";

export default function BenefitSection(){
    return(
        <div className="benefits text-center h-[80] pb-40 bg-green-200">
            <div className="p-16 content-center">
                <h3 className="text-3xl">Become a wasteless cook using Wasteless Kitchen!</h3>
            </div>
            <div className="md:flex md:w-4/5 justify-evenly mx-auto h-2/3 ">
                <Card image="/recycle.png" text="Reduce food waste"/>
                <Card image="/money.png" text="Save money"/>
                <Card image="/cook-book.png" text="Try new recipes"/>
            </div>

        </div>
    );
}