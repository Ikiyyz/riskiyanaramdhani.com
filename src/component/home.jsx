import PropTypes from "prop-types";

const Home = ({ language }) => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative py-24 md:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center bg-no-repeat mix-blend-overlay"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <img
                src="/assets/profile.jpg"
                alt="Foto Profil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-left">
              {language === "id"
                ? "Hai, Saya Riski, seorang pengembang backend"
                : "Hi, I’m Riski, a backend developer"}
            </h1>

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide text-left">
                {language === "id"
                  ? "Saya adalah lulusan SMK dengan pengalaman magang sebagai backend developer di PT Top Indo Jatinangor. Melalui pengalaman tersebut, saya telah mendapatkan keahlian dalam pengembangan sistem dan manajemen basis data. Selain itu, saya juga terus mengembangkan kemampuan di bidang teknologi melalui proyek-proyek mandiri."
                  : "I graduated from vocational school with internship experience as a backend developer at PT Top Indo Jatinangor. Through this experience, I have gained skills in system development and database management. Additionally, I continue to develop my skills in technology through independent projects."}
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide text-left">
                {language === "id"
                  ? "Saat ini, saya telah menyelesaikan bootcamp fullstack web development dan lebih fokus pada pengembangan backend, yang semakin memperkuat kompetensi saya di bidang teknologi."
                  : "Currently, I have completed a fullstack web development bootcamp and am more focused on backend development, further strengthening my competencies in the technology field."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Home;
