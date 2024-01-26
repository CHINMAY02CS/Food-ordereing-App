
import Image from "next/image"
import Right from "../icons/Right"


export default function Hero() {
  return (
    <section className="hero mt-4">
        <div className="py-12">
            <h1 className="text-4xl  font-semibold ">
            Everything <br/> 
            is better <br/> 
            with a&nbsp;
            <span className="text-primary">
            Pizza
            </span>
            </h1>

            <p className="my-6  text-gray-500 text-sm">
            Pizza is the missing piece that makes everyday
            complete, a simple yet delicious joy in life
            </p>
            <div className="flex gap-4" text-sm >
                <button className="bg-primary items-center uppercase font-semibold flex gap-2  text-white px-4 py-2 rounded-full">
                Order Now
                <Right/>
                </button>

                <button className=" flex gap-2 items-center text-gray-800 font-semibold px-4 py-2 rounded-full">
                Learn More
                <Right/>
                </button>
            </div>
        </div>
            
        <div className="relative">
            <Image src="/pizzahero.png" alt="pizza" layout="fill" objectFit="contain"/>      

        </div>
    </section>
  )
}
