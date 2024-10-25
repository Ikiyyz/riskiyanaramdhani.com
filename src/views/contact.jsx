import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import PropTypes from "prop-types";

const Contact = ({ language }) => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full py-20 bg-gradient-to-b from-black via-gray-900/50 to-black relative"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      </div>

      <div className="relative w-full max-w-[2000px] mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
          {language === "id" ? "Kontak" : "Contact"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informasi Kontak */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {language === "id" ? "Informasi Kontak" : "Contact Information"}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300">
                <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    {language === "id" ? "Email" : "Email"}
                  </p>
                  <a
                    href="mailto:your.email@example.com"
                    className="hover:text-blue-500 transition"
                  >
                    rizkiyanaramdhani02@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <Phone className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    {language === "id" ? "Telepon" : "Phone"}
                  </p>
                  <a
                    href="tel:+6281234567890"
                    className="hover:text-blue-500 transition"
                  >
                    +62 812 3456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    {language === "id" ? "Lokasi" : "Location"}
                  </p>
                  <p>Jatinangor - Sumedang, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Media Sosial */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {language === "id" ? "Media Sosial" : "Social Media"}
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <a
                href="https://linkedin.com/in/riski-yana-ramdhani-2b91012b4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-500 transition"
              >
                <FaLinkedin className="w-6 h-6 flex-shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/ramadhanrizki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-500 transition"
              >
                <FaGithub className="w-6 h-6 flex-shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                href="https://instagram.com/ikiyyz_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-500 transition"
              >
                <FaInstagram className="w-6 h-6 flex-shrink-0" />
                <span>Instagram</span>
              </a>

              <a
                href="https://t.me/Ikiyyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-500 transition"
              >
                <FaTelegram className="w-6 h-6 flex-shrink-0" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Contact;
