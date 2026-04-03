import PropTypes from "prop-types";

const Experience = ({ language }) => {
  return (
    <section id="experience" className="min-h-screen w-full py-20 bg-black relative">
      <div className="relative w-full max-w-[2000px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 text-white tracking-tight">
          {language === "id" ? "Pengalaman" : "Experience"}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Pengalaman Pertama */}
          <a
            href="https://github.com/ikiyyz/quickpos"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-950 p-6 rounded-xl border border-white/10 shadow-sm transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1 cursor-pointer block"
          >
            <div className="flex flex-col items-stretch space-y-4 w-full h-full">
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: "1919 / 864" }}
              >
                <img
                  src="/assets/project-bootcamp4.jpg"
                  alt="Next-POS"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Full Stack Developer"
                    : "Full Stack Developer"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                  {language === "id" ? "Bootcamp " : "Bootcamp "}{" "}
                  <a
                    href="https://rubicamp.com/"
                    className="text-neutral-300 underline underline-offset-2 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    RUBICAMP
                  </a>
                </p>
                <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                  April 2025 - Juli 2025
                </span>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Mengembangkan sistem Point of Sale (POS) berbasis web untuk mendukung operasional bisnis, mencakup manajemen produk, transaksi penjualan, pembelian, serta pengelolaan pelanggan dan supplier. Dilengkapi dengan fitur dashboard analytics, laporan penjualan, inventory tracking, serta sistem autentikasi dengan role-based access. Dibangun menggunakan Node.js, Express, PostgreSQL, dan EJS."
                    : "Developed a web-based Point of Sale (POS) system to support business operations, including product management, sales transactions, purchases, and customer and supplier management. Features include dashboard analytics, sales reports, inventory tracking, and role-based authentication. Built using Node.js, Express, PostgreSQL, and EJS."}
                </p>
              </div>
            </div>
          </a>

          {/* Pengalaman kedua */}
          <a
            href="https://github.com/ikiyyz/sqlite-bread-pagination"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-950 p-6 rounded-xl border border-white/10 shadow-sm transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1 cursor-pointer block"
          >
            <div className="flex flex-col items-stretch space-y-4 w-full h-full">
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: "1919 / 864" }}
              >
                <img
                  src="/assets/project-bootcamp5.png"
                  alt="Next-POS"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Full Stack Developer"
                    : "Full Stack Developer"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                  {language === "id" ? "Bootcamp " : "Bootcamp "}{" "}
                  <a
                    href="https://rubicamp.com/"
                    className="text-neutral-300 underline underline-offset-2 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    RUBICAMP
                  </a>
                </p>
                <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                  April 2025 - Juli 2025
                </span>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Mengembangkan aplikasi web untuk pengelolaan data dengan fitur CRUD (Create, Read, Update, Delete), dilengkapi dengan pagination serta filtering multi-kriteria yang dapat dikombinasikan menggunakan operator AND/OR. Dibangun menggunakan Node.js, Express, SQLite3, dan EJS."
                    : "Developed a data management web application with CRUD (Create, Read, Update, Delete) features, including pagination and multi-criteria filtering with AND/OR logic. Built using Node.js, Express, SQLite3, and EJS."}
                </p>
              </div>
            </div>
          </a>

          {/* Pengalaman ketiga */}
          <a
            href="https://github.com/ikiyyz/postgres-auth-pagination"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-950 p-6 rounded-xl border border-white/10 shadow-sm transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1 cursor-pointer block"
          >
            <div className="flex flex-col items-stretch space-y-4 w-full h-full">
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: "1919 / 864" }}
              >
                <img
                  src="/assets/project-bootcamp6.png"
                  alt="Next-POS"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Full Stack Developer"
                    : "Full Stack Developer"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                  {language === "id" ? "Bootcamp " : "Bootcamp "}{" "}
                  <a
                    href="https://rubicamp.com/"
                    className="text-neutral-300 underline underline-offset-2 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    RUBICAMP
                  </a>
                </p>
                <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                  April 2025 - Juli 2025
                </span>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Mengembangkan aplikasi Todo berbasis web dengan sistem autentikasi pengguna, manajemen data, dan pengelolaan profil. Dilengkapi dengan fitur pagination, filtering dan sorting (dengan kombinasi AND/OR), serta upload avatar untuk profil pengguna. Dibangun menggunakan Express, PostgreSQL, dan session-based authentication dengan struktur aplikasi yang terorganisir."
                    : "Developed a web-based Todo application with user authentication, data management, and profile management features. Includes pagination, advanced filtering and sorting (with AND/OR conditions), and avatar upload for user profiles. Built using Express, PostgreSQL, and session-based authentication with a well-structured architecture."}
                </p>
              </div>
            </div>
          </a>

          {/* Pengalaman keempat */}
          <a
            href="https://github.com/ikiyyz/mongodb-async-breads-api"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-950 p-6 rounded-xl border border-white/10 shadow-sm transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1 cursor-pointer block"
          >
            <div className="flex flex-col items-stretch space-y-4 w-full h-full">
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: "1919 / 864" }}
              >
                <img
                  src="/assets/project-bootcamp7.png"
                  alt="Next-POS"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Full Stack Developer"
                    : "Full Stack Developer"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                  {language === "id" ? "Bootcamp " : "Bootcamp "}{" "}
                  <a
                    href="https://rubicamp.com/"
                    className="text-neutral-300 underline underline-offset-2 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    RUBICAMP
                  </a>
                </p>
                <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                  April 2025 - Juli 2025
                </span>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Mengembangkan aplikasi web berbasis MongoDB untuk pengelolaan data pengguna dan todo, dilengkapi dengan fitur CRUD, pencarian, sorting, dan pagination. Menggunakan Node.js dan Express pada sisi backend serta JavaScript untuk membangun antarmuka yang interaktif."
                    : "Developed a MongoDB-based web application for managing user and todo data, featuring CRUD operations, search, sorting, and pagination. Built with Node.js and Express on the backend, and JavaScript for an interactive user interface."}
                </p>
              </div>
            </div>
          </a>

          {/* Pengalaman kelima */}
          <a
            href="https://github.com/ramadhanrizki/connect-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-950 p-6 rounded-xl border border-white/10 shadow-sm transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1 cursor-pointer block"
          >
            <div className="flex flex-col items-stretch space-y-4 w-full h-full">
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: "1919 / 864" }}
              >
                <img
                  src="/assets/project-bootcamp1.jpg"
                  alt="Backend Developer"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Full Stack Developer"
                    : "Full Stack Developer"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                  {language === "id" ? "Bootcamp " : "Bootcamp "}{" "}
                  <a
                    href="https://bearmentor.notion.site/"
                    className="text-neutral-300 underline underline-offset-2 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Bear Mentor
                  </a>
                </p>
                <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                  Februari 2024 - Mei 2024
                </span>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Mengembangkan aplikasi manajemen kontak berbasis web dengan fitur CRUD (Create, Read, Update, Delete) serta pencarian data berdasarkan nama, nomor telepon, dan email. Dibangun menggunakan HTML, CSS, dan JavaScript."
                    : "Developed a web-based contact management application with CRUD (Create, Read, Update, Delete) features and search functionality by name, phone number, and email. Built using HTML, CSS, and JavaScript."}
                </p>
              </div>
            </div>
          </a>

          {/* Pengalaman keenam */}

          <a
            href="https://github.com/ramadhanrizki/learnify-study"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-950 p-6 rounded-xl border border-white/10 shadow-sm transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1 cursor-pointer block"
          >
            <div className="flex flex-col items-stretch space-y-4 w-full h-full">
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: "1919 / 864" }}
              >
                <img
                  src="/assets/project-bootcamp2.jpg"
                  alt="Project React"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Full Stack Developer"
                    : "Full Stack Developer"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                  {language === "id" ? "Bootcamp " : "Bootcamp "}{" "}
                  <a
                    href="https://bearmentor.notion.site/"
                    className="text-neutral-300 underline underline-offset-2 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Bear Mentor
                  </a>
                </p>
                <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                  Februari 2024 - Mei 2024
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

          {/* Pengalaman Ketujuh */}
          <a
            href="https://github.com/ramadhanrizki/sportstat-api"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-950 p-6 rounded-xl border border-white/10 shadow-sm transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1 cursor-pointer block"
          >
            <div className="flex flex-col items-stretch space-y-4 w-full h-full">
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: "1919 / 864" }}
              >
                <img
                  src="/assets/project-bootcamp3.jpg"
                  alt="SportStat API"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Backend Developer"
                    : "Backend Developer"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                  {language === "id" ? "Bootcamp " : "Bootcamp "}{" "}
                  <a
                    href="https://bearmentor.notion.site/"
                    className="text-neutral-300 underline underline-offset-2 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Bear Mentor
                  </a>
                </p>
                <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                  Februari 2024 - Mei 2024
                </span>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Mengembangkan REST API untuk pengelolaan data olahraga dengan implementasi endpoint CRUD (Create, Read, Update, Delete) serta struktur API yang terorganisir. Dibangun menggunakan TypeScript dengan Node.js, PostgreSQL sebagai basis data, dan dideploy menggunakan Render."
                    : "Developed a REST API for sports data management with full CRUD (Create, Read, Update, Delete) endpoints and a well-structured API design. Built using TypeScript with Node.js, PostgreSQL as the database, and deployed on Render."}
                </p>
              </div>
            </div>
          </a>

          {/* Pengalaman Kedelapan */}
          <div className="group bg-neutral-950 p-6 rounded-xl border border-white/10 shadow-sm transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1 cursor-pointer">
            <div className="flex flex-col items-stretch space-y-4 w-full h-full">
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: "1919 / 864" }}
              >
                <img
                  src="/assets/project-jwt.jpg"
                  alt="Internship"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mb-1">
                  {language === "id"
                    ? "Magang SMK (Backend Developer)"
                    : "Internship (Backend Developer)"}
                </h3>
                <p className="text-gray-400 mt-1 mb-2 text-sm sm:text-base">
                  PT Topindoku Jatinangor
                </p>
                <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-4">
                  Mei 2022 - Agustus 2022
                </span>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {language === "id"
                    ? "Berkontribusi dalam pengembangan sistem backend perusahaan dengan mengimplementasikan autentikasi berbasis JWT menggunakan Golang sebagai bagian dari proyek akhir magang, serta mendukung pengelolaan akses dan keamanan aplikasi."
                    : "Contributed to the development of the company's backend system by implementing JWT-based authentication using Golang as part of the internship final project, supporting access control and application security."}
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
