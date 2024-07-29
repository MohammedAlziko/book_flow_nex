import { FilterHero } from "@/components/FilterHero";
import Hero from "@/components/Hero";
import { MobileGallery } from "@/components/MobileGallery";


export default function Home() {
  return (
 <div>
  <Hero/>
  <MobileGallery />
  <FilterHero />
 </div>
  );
}
