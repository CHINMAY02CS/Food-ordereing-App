import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
export default function Home() {
  return (
    <>
      
      <Hero/>
      <HomeMenu/>

      <section className="text-center my-16">
        <SectionHeaders 
        subHeader={'Our Story'} mainHeader={'About Us'} />
        <div className="text-gray-500 max-w-md mt-4 mx-auto flex flex-col gap-4">
          <p >
            Contact Desc
          </p>
          <p >
            Contact Desc
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact Us'}
        />
        <div className="mt-8">
          <a className="text-4xl text-gray-500 underline" href=" tel:+910011001100">+91 0011001100</a>
       
        </div>
        
      </section>

      
    </>
  );
}
