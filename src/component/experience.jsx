import PropTypes from "prop-types";

const Experience = ({ language }) => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full py-20 bg-gradient-to-b from-black via-gray-900/50 to-black relative"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      </div>

      <div className="relative w-full max-w-[2000px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 text-white">
          {language === "id" ? "Pengalaman" : "Experience"}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Pengalaman Pertama */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="https://github.com/ramadhanrizki/connect-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full md:w-auto flex-shrink-0"
              >
                <img
                  src="/assets/project-bootcamp1.jpg"
                  alt="Backend Developer"
                  className="w-full md:max-w-[280px] lg:max-w-[320px] h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-gray-800"
                  loading="lazy"
                />
              </a>

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
                    className="text-blue-400 underline"
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
                    : "Developing skills in the bootcamp by creating a contact management application Connect Link using HTML, CSS, and JavaScript."}
                </p>
              </div>
            </div>
          </div>

          {/* Pengalaman Kedua */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <img
                src="/assets/project-jwt.jpg"
                alt="Internship"
                className="w-full md:max-w-[280px] lg:max-w-[320px] h-auto object-cover rounded-lg"
                loading="lazy"
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

          {/* Pengalaman Ketiga */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="https://github.com/ramadhanrizki/nama-repositori"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full md:w-auto flex-shrink-0"
              >
                <img
                  src="/assets/project-bootcamp2.jpg"
                  alt="Project React"
                  className="w-full xs:max-w-[100px] sm:max-w-[120px] md:max-w-[280px] lg:max-w-[200px] h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-gray-800"
                  loading="lazy"
                />
              </a>

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
                    className="text-blue-400 underline"
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
          </div>

          {/* Pengalaman Keempat */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="https://github.com/ramadhanrizki/nama-repositori"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full md:w-auto flex-shrink-0"
              >
                <img
                  src="/assets/project-jwt.jpg"
                  alt="Backend JWT"
                  className="w-full sm:max-w-[200px] h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-gray-800"
                  loading="lazy"
                />
              </a>

              <div className="flex flex-col justify-between flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Backend Developer (Proyek Pribadi)"
                    : "Backend Developer (Personal Project)"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                  Proyek Golang
                </p>
                <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                  2022
                </span>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Mengimplementasikan autentikasi JWT pada sistem backend untuk mengamankan API di proyek pribadi menggunakan Golang."
                    : "Implemented JWT authentication on the backend system to secure APIs in a personal project using Golang."}
                </p>
              </div>
            </div>
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
