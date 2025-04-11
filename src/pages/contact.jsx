import { FaEnvelope } from 'react-icons/fa'; // Email icon from FontAwesome
import { FaFacebook } from 'react-icons/fa'; // Facebook icon from FontAwesome
import { FaPhone } from 'react-icons/fa'; // Phone icon from FontAwesome
import { motion } from 'framer-motion'; // Import motion for animations

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold mb-6"
      >
        Contactez-nous
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-80 bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="flex flex-col items-center space-y-6">

          {/* Facebook Contact */}
          <div className="flex items-center space-x-4">
            <FaFacebook className="text-blue-600 text-3xl" />
            <div>
              <p className="text-lg font-medium">
                Facebook{" "}
                <a
                  href="https://www.facebook.com/Rucher-de-Stoqueu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Rucher de Stoqueu
                </a>
              </p>
            </div>
          </div>

          {/* Email Contact */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-gray-600 text-3xl" />
            <div>
              <p className="text-lg font-medium">philippeneo@gmail.com</p>
            </div>
          </div>

          {/* Phone Contact */}
          <div className="flex items-center space-x-4">
            <FaPhone className="text-green-600 text-3xl" />
            <div>
              <p className="text-lg font-medium">0032475685201</p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Contact;


