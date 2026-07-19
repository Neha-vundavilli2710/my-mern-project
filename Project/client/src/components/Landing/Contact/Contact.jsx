import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {

  return (

    <section className="contact" id="contact">

      <div className="contact-heading">

        <span>Contact Us</span>

        <h2>Get In Touch</h2>

        <p>
          Have questions about Nutrition Assistant?
          We'd love to hear from you.
        </p>

      </div>

      <div className="contact-container">

        {/* Contact Form */}

        <div className="contact-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
          ></textarea>

          <button>

            Send Message

          </button>

        </div>

        {/* Contact Details */}

        <div className="contact-info">

          <div className="info-card">

            <FaEnvelope />

            <div>

              <h4>Email</h4>

              <p>
                support@nutritionassistant.com
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaPhoneAlt />

            <div>

              <h4>Phone</h4>

              <p>
                +91 98989 89898
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaMapMarkerAlt />

            <div>

              <h4>Location</h4>

              <p>
                Andhra Pradesh, India
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Contact;