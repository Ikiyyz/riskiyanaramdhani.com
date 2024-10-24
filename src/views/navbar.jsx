import { Menu, X } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("id");

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const toggleLanguage = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
      onLanguageChange(lang);
    }
  };

  const sections = [
    { id: "home", label: language === "id" ? "Beranda" : "Home" },
    { id: "about", label: language === "id" ? "Tentang" : "About" },
    {
      id: "experience",
      label: language === "id" ? "Pengalaman" : "Experience",
    },
    { id: "contacts", label: language === "id" ? "Kontak" : "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900/95 to-black/95 shadow-lg z-50 border-b border-gray-800 backdrop-blur-sm">
      <div className="w-full max-w-[2000px] mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <h1
            className="text-2xl font-bold text-gray-300 cursor-pointer hover:text-blue-400 transition-colors duration-300"
            onClick={() => scrollToSection("home")}
          >
            Riski Yana Ramdhani
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:flex items-center space-x-2">
            {sections.map((section) => (
              <a
                key={section.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className="relative inline-block px-3 py-2 text-sm md:text-base text-gray-300 transition-colors duration-300 hover:text-blue-400"
                href={`/${section.id}`}
              >
                {section.label}
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <div className="flex items-center text-gray-300">
              <span className="mr-1">🌐</span>
              <button
                onClick={() => toggleLanguage("id")}
                className={`mr-1 transition-colors duration-300 ${
                  language === "id"
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                ID
              </button>
              <span className="mx-1 border-l border-gray-600 h-4" />
              <button
                onClick={() => toggleLanguage("en")}
                className={`ml-1 transition-colors duration-300 ${
                  language === "en"
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="py-4 border-t border-gray-800">
              {sections.map((section) => (
                <a
                  key={section.id}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className="block w-full px-4 py-3 text-left text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-colors duration-300 rounded-md cursor-pointer"
                  href={`/${section.id}`}
                >
                  {section.label}
                </a>
              ))}
              <div className="flex items-center text-gray-300">
                <span className="mr-1">🌐</span>
                <button
                  onClick={() => toggleLanguage("id")}
                  className={`mr-1 transition-colors duration-300 ${
                    language === "id"
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  ID
                </button>
                <span className="mx-1 border-l border-gray-600 h-4" />
                <button
                  onClick={() => toggleLanguage("en")}
                  className={`ml-1 transition-colors duration-300 ${
                    language === "en"
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};

export default Navbar;
