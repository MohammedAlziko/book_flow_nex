import AccordionC from "@/components/AccordionC";
import ConClo from "@/components/Conclo";
import Experinces from "@/components/Experinecs";
import FavoriteDevices from "@/components/FavoriteDevices";
import { FilterHero } from "@/components/FilterHero";
import Hero from "@/components/Hero";
import { MobileGallery } from "@/components/MobileGallery";


export default function Home() {
  return (
 <div>
  <Hero/>
  <MobileGallery />
  <FilterHero />
  <Experinces />
  <FavoriteDevices/>
  <AccordionC />
  <ConClo />
 </div>
  );
}
