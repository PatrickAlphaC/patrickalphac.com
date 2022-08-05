import {
  FaTwitter,
  FaMedium,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
      <Image
        src="/frog-svg.svg"
        alt="Learn Blockchain, Solidity, and Full Stack Web3 Development with JavaScript – 32-Hour Course"
        width={100}
        height={100}
      />
      <a
        href="https://www.youtube.com/channel/UCn-3f8tw_E1jZvhuHatROwA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={50} />
      </a>
      <a
        href="https://twitter.com/PatrickAlphaC"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={50} />
      </a>
      <a
        href="https://medium.com/@patrick.collins_58673"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMedium size={50} />
      </a>
      <a
        href="https://github.com/PatrickAlphaC"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={50} />
      </a>
      <a
        href="https://www.linkedin.com/in/patrickalphac/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={50} />
      </a>
    </nav>
  );
}
