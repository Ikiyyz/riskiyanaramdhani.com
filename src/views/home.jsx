import PropTypes from "prop-types";

const Home = ({ language }) => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative py-24 md:py-28 bg-black"
    >
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden border border-white/20 shadow-lg">
              <img
                src="/assets/profile.jpg"
                alt="Foto Profil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          <div className="w-full md:w-3/5 space-y-6">
            <div className="space-y-1">
              <h1 className="text-sm sm:text-base lg:text-lg font-medium uppercase tracking-[0.18em] text-white/70">
                Riski Yana Ramadhan
              </h1>

              <div className="w-10 h-[1px] bg-white/20"></div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                Backend Developer
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-left">
                {language === "id"
                  ? "Lulusan SMK dengan pengalaman magang sebagai backend developer. Terbiasa membangun sistem berbasis web menggunakan Node.js, Express, dan PostgreSQL."
                  : "A vocational school graduate with internship experience as a backend developer. Experienced in building web-based systems using Node.js, Express, and PostgreSQL."}
              </p>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-left">
                {language === "id"
                  ? "Telah menyelesaikan bootcamp fullstack web development dan saat ini berfokus pada pengembangan backend, sambil terus mengembangkan kemampuan sebagai fullstack developer."
                  : "Completed a fullstack web development bootcamp and currently focused on backend development, while continuously growing as a fullstack developer."}
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
