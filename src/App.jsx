import { useState } from "react";
import Navbar from "./views/navbar";
import Home from "./views/home";
import About from "./views/about";
import Experience from "./views/experience";
import Contacts from "./views/contact";

function App() {
  const [language, setLanguage] = useState("id");
  const currentYear = new Date().getFullYear();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />

      <div className="flex flex-col items-center">
        <Home language={language} />
        <About language={language} />
        <Experience language={language} />
        <Contacts language={language} />
      </div>

      <footer className="py-8 border-t border-white/10 bg-black text-center">
        <p className="text-sm text-neutral-500">
          © {currentYear} Riski Yana Ramadhan
        </p>
      </footer>
    </div>
  );
}

export default App;
