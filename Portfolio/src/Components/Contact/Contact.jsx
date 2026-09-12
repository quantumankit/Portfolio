import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // ================= SEND EMAIL =================

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .sendForm(
        "service_axbtt7a",
        "template_1ziboq3",
        form.current,
        "Rz7W9pVF0HdDryNNL"
      )
      .then(
        () => {
          setIsSent(true);
          setIsSending(false);

          form.current.reset();

          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);

          setIsSending(false);

          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };



  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] overflow-hidden"
    >



      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#8245ec]/10 blur-[120px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-700/10 blur-[130px] rounded-full pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />



      <ToastContainer />



      <motion.div
        className="relative z-10 w-full flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >



        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
        >

          <motion.h2
            className="text-4xl font-bold text-white"
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            CONTACT
          </motion.h2>

          {/* Animated Line */}

          <motion.div
            className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 128,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          />

          <motion.p
            className="text-gray-400 mt-4 text-lg font-semibold"
            variants={fadeUp}
          >
            I’d love to hear from you—reach out for any opportunities or
            questions!
          </motion.p>

        </motion.div>



        <motion.div
          className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700"
          variants={formVariants}
          whileHover={{
            y: -6,
            boxShadow: "0 20px 50px rgba(130,69,236,0.20)",
            borderColor: "rgba(130,69,236,0.5)",
          }}
          transition={{
            duration: 0.3,
          }}
        >

          {/* Form Heading */}

          <motion.h3
            className="text-xl font-semibold text-white text-center"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            Connect With Me{" "}

            <motion.span
              className="ml-1 inline-block"
              animate={{
                y: [0, -7, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🚀
            </motion.span>
          </motion.h3>



          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-4 flex flex-col space-y-4"
          >

            {/* EMAIL */}

            <motion.input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
              variants={fadeUp}
              whileFocus={{
                scale: 1.02,
                borderColor: "#8245ec",
                boxShadow: "0 0 15px rgba(130,69,236,0.2)",
              }}
              transition={{
                duration: 0.2,
              }}
            />

            {/* NAME */}

            <motion.input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
              variants={fadeUp}
              whileFocus={{
                scale: 1.02,
                borderColor: "#8245ec",
                boxShadow: "0 0 15px rgba(130,69,236,0.2)",
              }}
              transition={{
                duration: 0.2,
              }}
            />

            {/* SUBJECT */}

            <motion.input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
              variants={fadeUp}
              whileFocus={{
                scale: 1.02,
                borderColor: "#8245ec",
                boxShadow: "0 0 15px rgba(130,69,236,0.2)",
              }}
              transition={{
                duration: 0.2,
              }}
            />

            {/* MESSAGE */}

            <motion.textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 resize-none"
              variants={fadeUp}
              whileFocus={{
                scale: 1.02,
                borderColor: "#8245ec",
                boxShadow: "0 0 15px rgba(130,69,236,0.2)",
              }}
              transition={{
                duration: 0.2,
              }}
            />


            <motion.button
              type="submit"
              disabled={isSending}
              className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md ${
                isSending
                  ? "opacity-70 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              variants={fadeUp}
              whileHover={
                !isSending
                  ? {
                      scale: 1.03,
                      y: -2,
                      boxShadow: "0 10px 25px rgba(130,69,236,0.3)",
                    }
                  : {}
              }
              whileTap={
                !isSending
                  ? {
                      scale: 0.97,
                    }
                  : {}
              }
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              {isSending ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  Sending...
                </span>
              ) : (
                "Send"
              )}
            </motion.button>

          </form>

        </motion.div>


        {isSent && (
          <motion.p
            className="mt-6 text-green-400 font-medium"
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            ✓ Thank you! Your message has been sent successfully.
          </motion.p>
        )}

      </motion.div>

    </section>
  );
};

export default Contact;
