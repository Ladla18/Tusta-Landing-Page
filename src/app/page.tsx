import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Journey from "../components/sections/Journey";
import OurFeatures from "@/components/sections/OurFeatures";
import BuiltForBrokers from "@/components/sections/BuiltForBrokers";
import BrokeragePotential from "@/components/sections/BrokeragePotential";
import Compliances from "@/components/sections/Compliances";
import Contact from "@/components/sections/Contact";
import Countdown from "@/components/sections/Countdown";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Journey />
      <OurFeatures />
      <BuiltForBrokers />
      <BrokeragePotential />
      <Compliances /> 
      <Countdown />
      <Contact />
    </main>
  );
}
