import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  const navigationLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" }

  ];


  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/quantumankit",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ankit-kumar-927892262/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/quantumankit",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/quantumankit/",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/quantumankit",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@quantumankit",
    },
  ];



  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#050414] text-white overflow-hidden">



      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#8245ec]/10 blur-[120px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional Glow */}

      <motion.div
        className="absolute bottom-0 left-10 w-64 h-64 bg-purple-600/10 blur-[110px] rounded-full pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />



      <motion.div
        className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >


        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeUp}
        >

          {/* Logo */}

          <motion.button
            onClick={() => handleScroll("about")}
            className="group flex items-center cursor-pointer"
            aria-label="Go to home"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-[#8245ec] text-2xl font-bold"
              whileHover={{ x: -4 }}
            >
              &lt;
            </motion.span>

            <span className="text-white text-2xl font-bold">
              Ankit
            </span>

            <span className="text-[#8245ec] text-2xl font-bold">
              /
            </span>

            <span className="text-white text-2xl font-bold">
              Kumar
            </span>

            <motion.span
              className="text-[#8245ec] text-2xl font-bold"
              whileHover={{ x: 4 }}
            >
              /&gt;
            </motion.span>
          </motion.button>

          {/* Tagline */}

          <motion.p
            className="mt-4 max-w-xl text-gray-400 text-sm md:text-base"
            variants={fadeUp}
          >
            Full Stack Developer passionate about building modern,
            scalable and user-friendly web applications.
          </motion.p>

        </motion.div>



        <motion.nav
          className="mt-8"
          variants={fadeUp}
        >
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">

            {navigationLinks.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="relative text-gray-400 text-sm md:text-base font-medium hover:text-[#8245ec] transition-colors duration-300 group"
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                {item.name}

                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#8245ec] rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.25 }}
                />
              </motion.button>
            ))}

          </div>
        </motion.nav>



        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-9"
          variants={fadeUp}
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400"
              initial={{
                opacity: 0,
                scale: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                type: "spring",
                stiffness: 180,
              }}
              whileHover={{
                scale: 1.18,
                y: -6,
                color: "#ffffff",
                borderColor: "#8245ec",
                backgroundColor: "rgba(130,69,236,0.2)",
                boxShadow: "0 0 20px rgba(130,69,236,0.5)",
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <span className="text-lg">
                {item.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>



        <motion.div
          className="w-full h-px bg-white/10 mt-10 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />



        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6"
          variants={fadeUp}
        >

          <motion.p
            className="text-sm text-gray-500 text-center md:text-left"
            whileHover={{
              color: "#9ca3af",
            }}
          >
            © 2026 Ankit Kumar. All rights reserved.
          </motion.p>

          <motion.p
            className="text-sm text-gray-500"
            whileHover={{
              y: -2,
            }}
          >
            Built with{" "}
            <span className="text-[#8245ec] font-semibold">
              React
            </span>{" "}
            &{" "}
            <span className="text-[#8245ec] font-semibold">
              Tailwind CSS
            </span>
          </motion.p>

        </motion.div>

      </motion.div>
    </footer>
  );
};
export default Footer;
