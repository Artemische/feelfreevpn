import Card from "@/components/Card";
import Waves from "@/components/Waves";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex w-full h-full flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Waves>
          <section id="hero" className="flex flex-col items-center justify-center text-center gap-8">
            <div id="heading"  className="flex flex-col gap-8 text-4xl lg:text-8xl ">
              <h1 className="invisible h-1">feelFreeVPN VPN app & service</h1>
              <span className="mr-30 lg:mr-60">FEEL FREE</span>
              <span className="">DURING</span>
              <span className="ml-30 LG:ml-60">YOUR FLY</span>
            </div>
            <Link href="/install" >
              <button
              className="border-2 w-[250px] lg:w-[500px] flex justify-center border-[#0c344d] px-6 py-4 text-lg rounded hover:bg-[#0c344d] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <span >START EXPLORING</span>
              <span className="dots w-5"></span>
            </button>
            </Link>
          </section>
        </Waves>
        <section>
          <h2 className="invisible mt-8 md:mt-32">Features</h2>
            <div className="flex flex-col md:flex-row gap-8 px-4 md:px-2">
              <Card title="Fast and reliable" description="Experience lightning-fast speeds with our optimized servers." imgSrc="/light.svg" imgAlt="Fast" />
              <Card title="Privacy first" description="FeelFree VPN is built to respect your digital space — no logs, no leaks, no compromises." imgSrc="/shield.svg" imgAlt="Privacy" />
              <Card title="Easy to use" description="Stay safe on any network in just a few clicks." imgSrc="/hand.svg" imgAlt="Easy to use" />
            </div>
        </section>
      </main>
    </div>
  );
}
