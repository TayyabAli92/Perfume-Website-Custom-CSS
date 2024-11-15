import PerfumeType from "@/components/perfume";
import "../../style/product.css"
import Image from "next/image";

export default function PerfumeItem(){
    return(
        <div className="project-box">
            <h1 className="project-heading">Perfume Item</h1>
            <div className="main-div">

                <PerfumeType
                image="/perf-1.png"
                name="Aura"
                price="Rs:3999" 
                />
                <PerfumeType
                image="/perf-2.png"
                name="Luxe"
                price="Rs:2499" 
                />
                <PerfumeType
                image="/perf-3.png"
                name="Vibe"
                price="Rs:2199" 
                />
                <PerfumeType
                image="/perf-4.png"
                name="Zephyr"
                price="3499" 
                />
                <PerfumeType
                image="/perf-5.png"
                name="Pulse"
                price="1999" 
                />
                <PerfumeType
                image="/perf-6.png"
                name="Solace"
                price="4499" 
                />
            </div>
        </div>
    )
}