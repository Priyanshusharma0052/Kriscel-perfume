import {
  FaInstagram,
  FaFacebook,
  FaYoutube
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {

  return (
    <footer className="bg-[#0f0b09] text-[#f7f3ec] border-t border-white/10 py-16 px-5 md:px-10">

      <div className="container-lux grid md:grid-cols-4 gap-12">

        <div>

          <a
            href="#home"
            className="title text-5xl text-[#d9c39a] inline-block hover:text-[#f0ddba] duration-200"
          >
            NOIR
          </a>

          <p className="mt-6 text-[#c9bfb3] leading-8">

            Luxury fragrances crafted with architectural restraint, rare materials, and a long, elegant trail.

          </p>

        </div>

        <div>

          <h3 className="text-2xl mb-6">
            Collections
          </h3>

          <ul className="space-y-4 text-[#c9bfb3]">

            <li><a href="#collection" className="hover:text-white duration-200">Luxury Oud</a></li>
            <li><a href="#collection" className="hover:text-white duration-200">Royal Amber</a></li>
            <li><a href="#collection" className="hover:text-white duration-200">Velvet Collection</a></li>

          </ul>

        </div>

        <div>

          <h3 className="text-2xl mb-6">
            Company
          </h3>

          <ul className="space-y-4 text-[#c9bfb3]">

            <li><a href="#about" className="hover:text-white duration-200">About</a></li>
            <li><a href="#careers" className="hover:text-white duration-200">Careers</a></li>
            <li><a href="#contact" className="hover:text-white duration-200">Contact</a></li>

          </ul>

        </div>

        <div>

          <h3 className="text-2xl mb-6">
            Legal
          </h3>

          <ul className="space-y-4 text-[#c9bfb3]">

            <li><a href="#terms" className="hover:text-white duration-200">Terms & Conditions</a></li>
            <li><a href="#policies" className="hover:text-white duration-200">Policies</a></li>

          </ul>

        </div>

        <div>

          <h3 className="text-2xl mb-6">
            Follow Us
          </h3>

          <div className="flex gap-6 text-3xl">

            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Noir on Instagram"
              className="hover:text-[#f0ddba] duration-200"
              whileHover={{ y:-4, scale:1.08 }}
              transition={{ duration:0.2 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Noir on Facebook"
              className="hover:text-[#f0ddba] duration-200"
              whileHover={{ y:-4, scale:1.08 }}
              transition={{ duration:0.2 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Noir on YouTube"
              className="hover:text-[#f0ddba] duration-200"
              whileHover={{ y:-4, scale:1.08 }}
              transition={{ duration:0.2 }}
            >
              <FaYoutube />
            </motion.a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
