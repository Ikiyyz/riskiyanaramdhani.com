import {
  FaNode,
  FaDatabase,
  FaFileCode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { DiJavascript1, DiPostgresql, DiMysql } from "react-icons/di";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const About = ({ language }) => {
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDuration(15);
      } else if (window.innerWidth < 1024) {
        setDuration(20);
      } else {
        setDuration(25);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skills = [
    {
      name: "Node.js",
      icon: <FaNode className="w-8 h-8 md:w-10 md:h-10 text-green-400" />,
    },
    {
      name: "JavaScript",
      icon: (
        <DiJavascript1 className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
      ),
    },
    {
      name: "DBMS",
      icon: <FaDatabase className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />,
    },
    {
      name: "PostgreSQL",
      icon: (
        <DiPostgresql className="w-8 h-8 md:w-10 md:h-10 text-indigo-400" />
      ),
    },
    {
      name: "Express.js",
      icon: <FaNode className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />,
    },
    {
      name: "TypeScript",
      icon: <FaFileCode className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />,
    },
    {
      name: "React",
      icon: <FaReact className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="w-8 h-8 md:w-10 md:h-10 text-red-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
    },
    {
      name: "MySQL",
      icon: <DiMysql className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
    },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section
      id="about"
      className="min-h-screen w-full py-24 md:py-28 bg-gradient-to-b from-black via-gray-900/50 to-black relative"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
          {language === "id" ? "Tentang Saya" : "About Me"}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200 text-left">
              {language === "id" ? "Siapa Saya?" : "Who Am I?"}
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-left">
              {language === "id"
                ? "Saya adalah seorang pengembang web yang berfokus pada backend, dengan pengalaman yang solid dalam menggunakan Node.js, Express.js, dan teknologi terkait."
                : "I am a web developer focused on backend, with solid experience in using Node.js, Express.js, and related technologies."}
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-left">
              {language === "id"
                ? "Saya selalu berusaha meningkatkan keterampilan melalui proyek nyata, terus memperdalam pengetahuan untuk menghasilkan solusi yang efektif dan inovatif."
                : "I constantly strive to improve my skills through real-world projects, continually deepening my knowledge to create effective and innovative solutions."}
            </p>
          </div>
          <div className="mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200 text-center mb-8 sm:mb-12">
              {language === "id" ? "Keahlian" : "Skills"}
            </h3>
            <div className="overflow-hidden py-6 sm:py-8">
              <motion.div
                className="flex gap-6 sm:gap-6 lg:gap-8"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedSkills.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex flex-col items-center flex-shrink-0 p-3 sm:p-3 lg:p-4 hover:scale-110 transition-transform duration-300"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-300 mt-3 mb-1">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  language: PropTypes.string.isRequired,
};

export default About;
