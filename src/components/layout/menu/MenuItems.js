import Image from "next/image"


export default function MenuItems() {
  return (
    <div>
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25 ">
            <div className="text-center ">
            <img src={"/pizzahero.png"} className="max-h-24 block mx-auto max-w-auto" alt="pizza" />
            </div>
            
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">Description</p>
            <button className="px-8 mt-4 py-2 bg-primary text-white rounded-full">
                Add to cart $12
            </button>
        </div>
    </div>
  )
}
