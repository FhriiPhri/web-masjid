import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "beranda", type: "route", path: "/" },
    { name: "kajian", type: "route", path: "/kajian" },
    { name: "galeri", type: "route", path: "/gallery" },
    { name: "pengurus", type: "route", path: "/pengurus" },
    { name: "kontak", type: "route", path: "/kontak" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61581768106162"
                target="_blank"
                className="hover:text-emerald-200 transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/risma_nurulhuda14/"
                target="_blank"
                className="hover:text-emerald-200 transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/@MasjidNurulHudaDepok"
                target="_blank"
                className="hover:text-emerald-200 transition"
              >
                <Youtube size={16} />
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://wa.me/6281210672183"
                target="_blank"
                className="hover:text-emerald-200 flex items-center gap-1 transition"
              >
                <FaWhatsapp size={16} />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
              <a
                href="mailto:masjidnurulhudadepok14@gmail.com"
                target="_blank"
                className="hover:text-emerald-200 flex items-center gap-1 transition"
              >
                <Mail size={16} />
                <span className="hidden md:inline">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-emerald-600 transition"
            >
              <img
                src={logo}
                alt="Masjid Nurul Huda Logo"
                className="h-12 w-12 object-contain"
              />
              Masjid Nurul Huda
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.type === "scroll") scrollToSection(item.name);
                    else if (item.type === "route") navigate(item.path);
                  }}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition"
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </button>
              ))}

              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition shadow-md hover:shadow-lg">
                Masuk
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.type === "scroll") scrollToSection(item.name);
                  else if (item.type === "route") navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-3 hover:bg-gray-50 transition"
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;