import ContactForm from "@/components/contact-form";
import Navbar from "@/components/navbar";
import {NavbarPage} from "@/lib/types";

export default function ContactPage() {
    return (
        <main>
            <Navbar isActive={NavbarPage.Contact} />
            <ContactForm />
        </main>
    )
}