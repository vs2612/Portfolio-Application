import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/vector_bg.jpg";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 50, {
      duration: 2,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Vishal Singh
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="https://www.linkedin.com/in/vishal-singh-2525a0212target"target = {"blank"}>Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              500+
              {ratio < 2 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                100+
                {ratio < 2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    50
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>vs6686949@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Vishal" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;