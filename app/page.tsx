import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {Page} from "@/lib/types";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
      <main>
          <Navbar currentPage={Page.Home} />
        <Hero />
          <Footer currentPage={Page.Home} />
      </main>
  )
}