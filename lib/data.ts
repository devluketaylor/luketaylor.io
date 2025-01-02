import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {NavbarPage} from "@/lib/types";

export const navbarLinks = [{ name: "Home", href: "/", rel: NavbarPage.Home }, { name: "Contact", href: "/contact", rel: NavbarPage.Contact }, { name: "Blog", href: "/blog", rel: NavbarPage.Blog }];
export const socialLinks = [{ icon: FaGithub, name: "Github", href: "" }, { icon: FaXTwitter,name: "Twitter", href: "" }, { icon: FaLinkedin, name: "LinkedIn", href: "" }];