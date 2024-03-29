import Image from "next/image"
import MenuItems from "./menu/MenuItems"
import SectionHeaders from "./SectionHeaders"


export default function HomeMenu() {
  return (
    <section className="" >
    <div className="absolute left-0 right-0 w-full justify-start">
        <div className=" absolute left-0 -top-[70px] text-left -z-10">
            <Image src="/saladr.png" alt="sr" width={154} height={370}/>      

        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
            <Image src="/saladl.png" alt="sl" width={218} height={370}/>      

        </div>
    </div>
    <div className="text-center mb-8">
       <SectionHeaders  subHeader={'Check out'} mainHeader={'Menu'} />
    </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItems/>
        <MenuItems/>
        <MenuItems/>
        <MenuItems/>
        <MenuItems/>
        <MenuItems/>

      </div>
    </section>
  )
}
