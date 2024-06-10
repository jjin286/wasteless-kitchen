import Image from "next/image";

export default function Card({image, text} : {image: string, text: string}){
    return(
        <div className="card p-5">
            <div className="image">
                <Image
                    src={image}
                    width={200}
                    height={200}
                    alt={text}
                />
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    );
}