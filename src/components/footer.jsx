import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Vishal Singh</h2>
        <p>Motivation is temporary, but discipline lasts forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://youtube.com" target={"_blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.linkedin.com/in/vishal-singh-2525a0212" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/vs2612" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;