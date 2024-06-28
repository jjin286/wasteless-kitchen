import Card from './Card.tsx'

export default function CardSection(){
    return(
        <div className="flex w-3/4 justify-center flex-wrap">
            <Card image="/recycle.png" text="Reduce food waste"/>
            <Card image="/recycle.png" text="Reduce food waste"/>
            <Card image="/recycle.png" text="Reduce food waste"/>
            <Card image="/recycle.png" text="Reduce food waste"/>
            <Card image="/recycle.png" text="Reduce food waste"/>
            <Card image="/recycle.png" text="Reduce food waste"/>
            <Card image="/recycle.png" text="Reduce food waste"/>
            <Card image="/recycle.png" text="Reduce food waste"/>
            <Card image="/recycle.png" text="Reduce food waste"/>
        </div>
    );
}