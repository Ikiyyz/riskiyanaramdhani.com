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

      <div className="relative w-full max-w-[2000px] mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
          {language === "id" ? "Pengalaman" : "Experience"}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pengalaman Pertama */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-start">
              <a
                href="https://github.com/ramadhanrizki/connect-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <img
                  src="/assets/project-bootcamp1.jpg"
                  alt="Backend Developer"
                  className="max-w-full sm:max-w-[470px] h-auto object-cover rounded-lg mr-8 mb-4 md:mb-0 transition-transform duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-gray-800"
                />
              </a>

              <div className="flex flex-col justify-between">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Full Stack Developer (Bootcamp)"
                    : "Full Stack Developer (Bootcamp)"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2">
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

                <span className="text-gray-400 text-sm md:text-base mb-4">
                  2020 - Sekarang
                </span>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {language === "id"
                    ? "Mengembangkan keterampilan dalam bootcamp dengan membuat aplikasi manajemen kontak Connect Link menggunakan HTML, CSS, dan JavaScript."
                    : "Developing skills in the bootcamp by creating a contact management application Connect Link using HTML, CSS, and JavaScript."}
                </p>
              </div>
            </div>
          </div>

          {/* Pengalaman Kedua */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-start">
              <img
                src="/assets/project-jwt.jpg"
                alt="Internship"
                className="w-full h-auto max-w-[450px] rounded-lg mr-8 mb-4 md:mb-0"
              />
              <div className="flex flex-col justify-between">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Magang SMK (Backend Developer)"
                    : "Internship (Backend Developer)"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2">
                  PT Topindoku Jatinangor
                </p>
                <span className="text-gray-400 text-sm md:text-base mb-4">
                  2018 - 2019
                </span>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {language === "id"
                    ? "Mengembangkan keterampilan dengan berkontribusi dalam pengembangan sistem backend perusahaan, termasuk implementasi autentikasi JWT menggunakan Golang."
                    : "Developing skills by contributing to the backend system development of the company, including implementing JWT authentication using Golang."}
                </p>
              </div>
            </div>
          </div>

          {/* Pengalaman Ketiga */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-start">
              <a
                href="https://github.com/ramadhanrizki/nama-repositori"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <img
                  src="/assets/project-bootcamp2.jpg"
                  alt="Project React"
                  className="max-w-[200px] h-auto rounded-lg mr-8 mb-4 md:mb-0 object-cover transition-transform duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-gray-800"
                />
              </a>

              <div className="flex flex-col justify-between">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Full Stack Developer (Bootcamp)"
                    : "Full Stack Developer (Bootcamp)"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2">
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
                <span className="text-gray-400 text-sm md:text-base mb-4">
                  2021
                </span>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {language === "id"
                    ? "Mengembangkan aplikasi manajemen tugas Learnif Study untuk mendukung produktivitas, mirip dengan Trello dan Todoist, dengan fitur kelola tugas, agenda, dan pelacakan kebiasaan."
                    : "Developed a task management app Learnif Study to boost productivity, similar to Trello and Todoist, with task management, agenda, and habit tracking features."}

                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {language === "id"
                      ? "Menggunakan Vite, Node.js, TypeScript, React, React Router, dan Vercel."
                      : "Used Vite, Node.js, TypeScript, React, React Router, and Vercel."}
                  </p>
                </p>
              </div>
            </div>
          </div>

          {/* Pengalaman Keempat */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-start">
              <img
                src="/assets/project-node.jpg"
                alt="Project Node"
                className="w-full h-auto max-w-[450px] rounded-lg mr-8 mb-4 md:mb-0"
              />
              <div className="flex flex-col justify-between">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Project Node (Backend Developer)"
                    : "Node Project (Backend Developer)"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2">
                  {language === "id" ? "Proyek di" : "Project at"}{" "}
                  <a
                    href="https://github.com/ramadhanrizki/project-node"
                    className="text-blue-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
                <span className="text-gray-400 text-sm md:text-base mb-4">
                  2022
                </span>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {language === "id"
                    ? "Membangun aplikasi backend menggunakan Node.js dan Express untuk mendukung aplikasi frontend."
                    : "Building a backend application using Node.js and Express to support the frontend application."}
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
