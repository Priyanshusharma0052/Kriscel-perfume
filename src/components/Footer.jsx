import {
  FaInstagram,
  FaFacebook,
  FaYoutube
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {

  return (
    <footer className="bg-[radial-gradient(circle_at_20%_10%,color-mix(in_srgb,var(--palette-rose)_35%,transparent)_0%,transparent_55%),linear-gradient(135deg,color-mix(in_srgb,var(--palette-violet)_65%,#0a0610)_0%,#05040a_80%)] text-white border-t border-white/10 py-16 px-5 md:px-10">

      <div className="container-lux grid md:grid-cols-4 gap-12">

        <div>

          <a
            href="#home"
            className="title text-4xl sm:text-5xl text-[color:rgba(255,255,255,0.96)] inline-block hover:text-white duration-200 tracking-[0.06em] uppercase"
          >
            KRISCEL PERFUMES
          </a>

          <p className="mt-6 text-white/75 leading-8">

            Perfumes made for everyday wear—clean, memorable, and easy to reach for.

          </p>

        </div>

        <div>

          <h3 className="text-2xl mb-6">
            Collections
          </h3>

          <ul className="space-y-4 text-white/70">

            <li><a href="#collection" className="hover:text-[color:rgba(251,232,206,0.95)] duration-200">Luxury Oud</a></li>
            <li><a href="#collection" className="hover:text-[color:rgba(251,232,206,0.95)] duration-200">Royal Amber</a></li>
            <li><a href="#collection" className="hover:text-[color:rgba(251,232,206,0.95)] duration-200">Velvet Collection</a></li>

          </ul>

        </div>

        <div>

          <h3 className="text-2xl mb-6">
            Company
          </h3>

          <ul className="space-y-4 text-white/70">

            <li><a href="#about" className="hover:text-[color:rgba(251,232,206,0.95)] duration-200">About</a></li>
            <li><a href="#careers" className="hover:text-[color:rgba(251,232,206,0.95)] duration-200">Careers</a></li>
            <li><a href="#contact" className="hover:text-[color:rgba(251,232,206,0.95)] duration-200">Contact</a></li>

          </ul>

        </div>

        <div>

          <h3 className="text-2xl mb-6">
            Legal
          </h3>

          <ul className="space-y-4 text-white/70">

            <li><a href="#terms" className="hover:text-[color:rgba(251,232,206,0.95)] duration-200">Terms & Conditions</a></li>
            <li><a href="#policies" className="hover:text-[color:rgba(251,232,206,0.95)] duration-200">Policies</a></li>

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
              className="hover:text-[color:rgba(251,232,206,0.92)] duration-200 text-white/90"
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
              className="hover:text-[color:rgba(251,232,206,0.92)] duration-200 text-white/90"
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
              className="hover:text-[color:rgba(251,232,206,0.92)] duration-200 text-white/90"
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
