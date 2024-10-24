import PropTypes from "prop-types";

const Experience = ({ language }) => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full py-20 bg-gradient-to-b from-black via-gray-900/50 to-black relative"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      </div>

      <div className="relative w-full max-w-[2000px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 text-white">
          {language === "id" ? "Pengalaman" : "Experience"}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Pengalaman Pertama */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-700">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <img
                src="/assets/project-jwt.jpg"
                alt="Internship"
                className="w-full md:max-w-[280px] lg:max-w-[320px] h-auto object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-col justify-between flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Magang SMK (Backend Developer)"
                    : "Internship (Backend Developer)"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                  PT Topindoku Jatinangor
                </p>
                <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                  2018 - 2019
                </span>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Mengembangkan keterampilan dengan berkontribusi dalam pengembangan sistem backend perusahaan, termasuk implementasi autentikasi JWT menggunakan Golang."
                    : "Developing skills by contributing to the backend system development of the company, including implementing JWT authentication using Golang."}
                </p>
              </div>
            </div>
          </div>

          {/* Pengalaman Kedua */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-700">
            <a
              href="https://github.com/ramadhanrizki/connect-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-start w-full h-full"
            >
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 w-full h-full">
                <img
                  src="/assets/project-bootcamp1.jpg"
                  alt="Backend Developer"
                  className="w-full h-auto max-w-[280px] md:max-w-[320px] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-gray-800"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  style={{ aspectRatio: "16 / 9" }}
                />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                    {language === "id"
                      ? "Full Stack Developer (Bootcamp)"
                      : "Full Stack Developer (Bootcamp)"}
                  </h3>
                  <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                    {language === "id" ? "Bootcamp " : "Bootcamp "}{" "}
                    <a
                      href="https://bearmentor.notion.site/"
                      className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bear Mentor
                    </a>
                  </p>
                  <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                    2020 - Sekarang
                  </span>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {language === "id"
                      ? "Mengembangkan keterampilan dalam bootcamp dengan membuat aplikasi manajemen kontak Connect Link menggunakan HTML, CSS, dan JavaScript."
                      : "Developing skills in the bootcamp by creating a contact management application Connect Link using HTML, CSS, dan JavaScript."}
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-700">
            <a
              href="https://github.com/ramadhanrizki/learnify-study"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full md:w-auto flex-shrink-0"
            >
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src="/assets/project-bootcamp2.jpg"
                  alt="Project React"
                  className="w-full max-w-[200px] mx-auto h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-gray-800"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                    {language === "id"
                      ? "Full Stack Developer (Bootcamp)"
                      : "Full Stack Developer (Bootcamp)"}
                  </h3>
                  <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                    {language === "id" ? "Bootcamp " : "Bootcamp "}{" "}
                    <a
                      href="https://bearmentor.notion.site/"
                      className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bear Mentor
                    </a>
                  </p>
                  <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                    2021
                  </span>
                  <div className="space-y-2">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {language === "id"
                        ? "Mengembangkan aplikasi manajemen tugas Learnif Study untuk mendukung produktivitas, mirip dengan Trello dan Todoist, dengan fitur kelola tugas, agenda, dan pelacakan kebiasaan."
                        : "Developed a task management app Learnif Study to boost productivity, similar to Trello and Todoist, with task management, agenda, and habit tracking features."}
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {language === "id"
                        ? "Menggunakan Vite, Node.js, TypeScript, React, React Router, dan Vercel."
                        : "Used Vite, Node.js, TypeScript, React, React Router, and Vercel."}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Pengalaman Keempat */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-700">
            <a
              href="https://github.com/ramadhanrizki/sportstat-api"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-start w-full h-full"
            >
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 w-full h-full">
                <img
                  src="/assets/project-bootcamp3.jpg"
                  alt="SportStat API"
                  className="w-full h-auto max-w-[280px] md:max-w-[320px] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-gray-800"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                    {language === "id"
                      ? "Backend Developer (Bootcamp)"
                      : "Backend Developer (Bootcamp)"}
                  </h3>
                  <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                    {language === "id" ? "Bootcamp " : "Bootcamp "}{" "}
                    <a
                      href="https://bearmentor.notion.site/"
                      className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bear Mentor
                    </a>
                  </p>
                  <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                    2023
                  </span>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {language === "id"
                      ? "Mengembangkan SportStat API, API informasi sebagai ensiklopedia digital. Dibangun dengan TypeScript, menggunakan Node.js dan Deno, serta PostgreSQL sebagai basis data, dan dapat di-deploy di Render.com."
                      : "Developed the SportStat API, an information API serving as a digital encyclopedia. Built with TypeScript, utilizing Node.js and Deno, and PostgreSQL as the database, deployable on Render.com."}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Experience;
