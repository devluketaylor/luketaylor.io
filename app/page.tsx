import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {NavbarPage} from "@/lib/types";

export default function HomePage() {
  return (
      <main>
          <Navbar isActive={NavbarPage.Home} />
        <Hero />
      </main>
  )
}