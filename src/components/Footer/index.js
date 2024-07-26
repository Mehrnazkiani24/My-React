import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <footer>
      <h2>Made by Mehrnaz Kiani</h2>
      <p>
        <ul>
          <a href="https://github.com/Mehrnazkiani24">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/mehrnaz-kiani-84462728?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
