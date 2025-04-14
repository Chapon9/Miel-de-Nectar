import { FaEnvelope } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="contact-heading"
      >
        Contactez-nous
      </motion.h1>

      <div className="contact-content">
        {/* Left side - Contact info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="contact-info-frame"
        >
          <div className="contact-info">
            {/* Facebook Contact */}
            <div className="contact-item">
              <FaFacebook className="contact-icon" />
              <p className="contact-text">
                Facebook{' '}
                <a
                  href="https://www.facebook.com/Rucher-de-Stoqueu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Rucher de Stoqueu
                </a>
              </p>
            </div>

            {/* Email Contact */}
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p className="contact-text">philippeneo@gmail.com</p>
            </div>

            {/* Phone Contact */}
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p className="contact-text">0032475685201</p>
            </div>
          </div>
        </motion.div>

        {/* Right side - Google Maps */}
        <div className="google-maps-container">
          <iframe
            title="Google Maps - Rucher de Stoqueu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.87985837091!2d5.6933848771683015!3d50.4619618715945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c05e812920fd95%3A0xf7575e96b00fff24!2sHam.%20de%20Stoqueu%2045%2C%204920%20Aywaille!5e0!3m2!1sfr!2sbe!4v1744625863109!5m2!1sfr!2sbe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="google-map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
