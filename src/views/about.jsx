import {
  FaNode,
  FaFileCode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { DiJavascript1, DiPostgresql, DiMysql } from "react-icons/di";
import { SiExpress, SiSqlite, SiEjs, SiBootstrap, SiNextdotjs, SiMongodb, SiSequelize } from "react-icons/si";
import PropTypes from "prop-types";

const About = ({ language }) => {
  const skills = [
    { name: "HTML", Icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS", Icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "JavaScript", Icon: DiJavascript1, color: "text-[#F7DF1E]" },
    { name: "TypeScript", Icon: FaFileCode, color: "text-[#3178C6]" },
    { name: "React", Icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Next.js", Icon: SiNextdotjs, color: "text-[#ffffff]" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "text-[#7952B3]" },
    { name: "EJS", Icon: SiEjs, color: "text-[#B4CA65]" },
    { name: "Node.js", Icon: FaNode, color: "text-[#339933]" },
    { name: "Express.js", Icon: SiExpress, color: "text-[#eeeeee]" },
    { name: "Sequelize", Icon: SiSequelize, color: "text-[#234157]" },

    { name: "PostgreSQL", Icon: DiPostgresql, color: "text-[#336791]" },
    { name: "MySQL", Icon: DiMysql, color: "text-[#4479A1]" },
    { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
    { name: "SQLite", Icon: SiSqlite, color: "text-[#0F80CC]" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full py-24 md:py-28 bg-black relative"
    >
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white tracking-tight">
          {language === "id" ? "Tentang Saya" : "About Me"}
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:gap-14">
          <div className="space-y-4 sm:space-y-6 max-w-3xl">
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed text-left">
              {language === "id"
                ? "Saya tertarik pada pengembangan backend karena ketertarikan terhadap bagaimana sebuah sistem bekerja di balik layar dalam pengembangan web. Seiring waktu, hal tersebut berkembang menjadi kebiasaan untuk memahami dan membangun sistem secara lebih terstruktur dan efisien."
                : "I am interested in backend development driven by curiosity about how systems work behind the scenes in web development. Over time, it has grown into a habit of understanding and building systems in a more structured and efficient way."}
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-left mb-6 sm:mb-8">
              {language === "id" ? "Keahlian" : "Skills"}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {skills.map(({ name, Icon, color }) => (
                <li
                  key={name}
                  className="rounded-2xl border border-white/10 bg-neutral-950 px-3 py-5 sm:px-4 sm:py-6 flex flex-col items-center gap-3 text-center hover:border-white/20 transition-colors duration-200"
                >
                  <Icon
                    className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 ${color}`}
                    aria-hidden
                  />
                  <span className="text-xs sm:text-sm text-neutral-400 leading-tight">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
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
