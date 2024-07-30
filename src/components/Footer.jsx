import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="bg-emerald-100 py-8">
      <div className="align-elements flex flex-col sm:flex-row sm:justify-between items-center gap-y-4">
        <div className="text-2xl font-bold">
          Dev<span className="text-emerald-600">Nonso</span>
        </div>
        <div className="flex space-x-6 text-emerald-600">
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl hover:text-emerald-700 transition duration-300" />
          </a>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl hover:text-emerald-700 transition duration-300" />
          </a>
          <a
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-2xl hover:text-emerald-700 transition duration-300" />
          </a>
        </div>
        <p className="text-slate-600 text-sm mt-4 sm:mt-0">
          &copy; {getCurrentYear()} DevNonso. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
