import ContactForm from "@/components/contact-form";
import Navbar from "@/components/navbar";
import {Page} from "@/lib/types";
import Footer from "@/components/footer";

export default function ContactPage() {
    return (
        <main>
            <Navbar currentPage={Page.Contact} />
            <ContactForm />
            <Footer currentPage={Page.Contact} />
        </main>
    )
}