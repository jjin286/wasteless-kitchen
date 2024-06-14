import FeatureItem from "./FeatureItem";
import ComingSoonItem from "./ComingSoonItem";

export default function FeatureSection(){
    return(
        <div className="feature-section flex justify-evenly h-[80vh]">
            <ul className="feature-list" >
                <FeatureItem text="First feature"/>
                <FeatureItem text="Second feature"/>
                <FeatureItem text="Third feature"/>
                <FeatureItem text="Fourth feature"/>
                <FeatureItem text="Fifth feature"/>
            </ul>
            <ul className="coming-soon-list">
                <ComingSoonItem text="First coming soon"/>
                <ComingSoonItem text="Second coming soon"/>
                <ComingSoonItem text="Third coming soon"/>
                <ComingSoonItem text="Fourth coming soon"/>
                <ComingSoonItem text="Fifth coming soon"/>
            </ul>
        </div>
    );
}

