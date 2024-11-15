import Image from "next/image";
interface PerfumeType{
    image: string,
    name: string,
    price: string
}

export default function PerfumeType({image, name, price}:PerfumeType){
    return (
        <div className="project-item">
            <Image 
            src={image}
            alt="perfume Pictures"
            width={300}
            height={250}
            className="perfume-image"
            />
            <h3>{name}</h3>
            <p className="price">{price}</p>
        </div>
    )
}