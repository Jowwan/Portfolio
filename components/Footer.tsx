import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 bg-[#000319] font-outfit"
      id="#contact"
    >
      <div className="flex flex-col items-center px-20">
        <h1 className="text-4xl font-bold ">
          Got a <span className="text-purple-400">project</span> or{" "}
          <span className="text-purple-500">question</span>? Feel free to reach
          out!
        </h1>
        <p className="mt-10 text-gray-400 mb-5">
          Let’s connect! Click the button below to get in touch.
        </p>
        <a href="mailto:jowwanv@gmail.com" id="contact">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="w-full mt-16 flex justify-around">
        <p className="font-bold text-purple-300 text-center">
          © 2025 Jovan Velinov
        </p>
        <nav className="flex gap-10 items-center mb-8">
          <a
            className="cursor-pointer hover:text-purple-300 transition-all duration-500"
            href="https://github.com/Jowwan"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.683-.217.683-.483 0-.238-.008-.868-.013-1.704-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.089.636-1.34-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.983 1.03-2.682-.103-.253-.446-1.272.098-2.653 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.545 1.381.202 2.4.099 2.653.64.699 1.03 1.591 1.03 2.682 0 3.842-2.337 4.685-4.565 4.932.359.309.678.919.678 1.852 0 1.338-.012 2.419-.012 2.745 0 .268.18.579.688.481A10.014 10.014 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            className="cursor-pointer hover:text-purple-300 transition-all duration-500"
            href="https://www.instagram.com/jovanw_/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 1.5A4 4 0 0 0 3.5 7.5v9A4 4 0 0 0 7.5 20.5h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM17.5 5.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
