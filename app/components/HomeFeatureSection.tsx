import FeatureItem from "./FeatureItem";
import ComingSoonItem from "./ComingSoonItem";
import Image from "next/image";

export default function FeatureSection(){
    return(
        <div className="feature-section pb-40 pt-20 relative bg-[#daffd6]">
            <div className="p-16 text-center">
                <h3 className="text-3xl">Wasteless Kitchen Features</h3>
            </div>
            <div className="md:flex md:space-x-40 justify-center mx-auto relative z-10">
                <div className="bg-white bg-opacity-75 p-10 rounded md:m-0 m-5">
                    <div>
                        <h5 className="text-center font-bold">Features you can use today!</h5>
                    </div>
                    <ul className="feature-list" >
                        <FeatureItem text="First feature"/>
                        <FeatureItem text="Second feature"/>
                        <FeatureItem text="Third feature"/>
                        <FeatureItem text="Fourth feature"/>
                        <FeatureItem text="Fifth feature"/>
                    </ul>
                </div>
                <div className="bg-white bg-opacity-75 p-10 rounded md:m-0 m-5">
                    <h5 className="text-center font-bold">Features to look forward to!</h5>
                    <ul className="coming-soon-list">
                        <ComingSoonItem text="First coming soon"/>
                        <ComingSoonItem text="Second coming soon"/>
                        <ComingSoonItem text="Third coming soon"/>
                        <ComingSoonItem text="Fourth coming soon"/>
                        <ComingSoonItem text="Fifth coming soon"/>
                    </ul>
                </div>
            </div>
            <Image
                src={'/fruit-vegetables-background-design.png'}
                fill={true}
                alt=""
                className="absolute z-0 object-contain md:block hidden"
            />
        </div>
    );
}
