import { Library } from "lucide-react";
import { FaHome, FaPhone } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

export const routes = [
    { title: "خانه", href: "/", icon: FaHome },
    { title: "محصولات", href: "/products", icon: Library },
    { title: "تماس با ما", href: "/contact", icon: FaPhone },
    { title: "درباره ما", href: "/about", icon: FaPerson },
]