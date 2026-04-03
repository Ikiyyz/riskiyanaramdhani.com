import { Menu, X } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const toggleLanguage = (lang) => {
    if (lang !== language) {
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
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="w-full max-w-[2000px] mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <h1
            className="text-xl sm:text-2xl font-semibold tracking-tight text-white cursor-pointer hover:text-neutral-300 transition-colors duration-200"
            onClick={() => scrollToSection("home")}
          >
            Ramadhan
          </h1>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors duration-200"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
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
                className="group relative inline-block px-3 py-2 text-sm md:text-base text-neutral-400 transition-colors duration-200 hover:text-white"
                href={`/${section.id}`}
              >
                {section.label}
                <span className="absolute left-0 right-0 bottom-0 h-px bg-white/0 group-hover:bg-white/40 transition-colors duration-200" />
              </a>
            ))}
            <div className="flex items-center text-neutral-400">
              <span className="mr-1" aria-hidden>
                🌐
              </span>
              <button
                type="button"
                onClick={() => toggleLanguage("id")}
                className={`mr-1 transition-colors duration-200 ${language === "id"
                    ? "text-white"
                    : "text-neutral-500 hover:text-white"
                  }`}
              >
                ID
              </button>
              <span className="mx-1 border-l border-white/20 h-4" />
              <button
                type="button"
                onClick={() => toggleLanguage("en")}
                className={`ml-1 transition-colors duration-200 ${language === "en"
                    ? "text-white"
                    : "text-neutral-500 hover:text-white"
                  }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="py-4 border-t border-white/10">
              {sections.map((section) => (
                <a
                  key={section.id}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className="block w-full px-4 py-3 text-left text-neutral-400 hover:text-white hover:bg-white/5 transition-colors duration-200 rounded-md cursor-pointer"
                  href={`/${section.id}`}
                >
                  {section.label}
                </a>
              ))}
              <div className="flex items-center text-neutral-400 px-4 pt-2">
                <span className="mr-1" aria-hidden>
                  🌐
                </span>
                <button
                  type="button"
                  onClick={() => toggleLanguage("id")}
                  className={`mr-1 transition-colors duration-200 ${language === "id"
                      ? "text-white"
                      : "text-neutral-500 hover:text-white"
                    }`}
                >
                  ID
                </button>
                <span className="mx-1 border-l border-white/20 h-4" />
                <button
                  type="button"
                  onClick={() => toggleLanguage("en")}
                  className={`ml-1 transition-colors duration-200 ${language === "en"
                      ? "text-white"
                      : "text-neutral-500 hover:text-white"
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
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default Navbar;
