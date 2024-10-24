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
    <div className="min-h-screen bg-gray-100">
      <Navbar onLanguageChange={handleLanguageChange} />

      <div className="flex flex-col items-center">
        <section
          id="home"
          className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 text-white"
        >
          <Home language={language} />
        </section>

        <section
          id="about"
          className="min-h-screen w-full flex items-center justify-center bg-gray-700 text-white"
        >
          <About language={language} />
        </section>

        <section
          id="experience"
          className="min-h-screen w-full flex items-center justify-center bg-gray-600 text-white"
        >
          <Experience language={language} />
        </section>

        <section
          id="contacts"
          className="min-h-screen w-full flex items-center justify-center bg-gray-500 text-white"
        >
          <Contacts language={language} />
        </section>
      </div>

      <footer className="py-4 bg-gray-900 text-white text-center">
        <p className="text-lg font-bold">© {currentYear} Riski Yana Ramdhani</p>
      </footer>
    </div>
  );
}

export default App;
