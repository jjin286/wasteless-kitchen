import Image from "next/image";

export default function Card({image, text} : {image: string, text: string}){
    return(
        <div className="card p-12 m-5 bg-[#daffd6] rounded content-center">
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
        </div>
    );
}
// bg-[#dbdbdb]
// bg-[#daffd6]
// bg-[#adf08b]