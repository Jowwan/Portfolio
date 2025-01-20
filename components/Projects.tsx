"use client";

import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-32 bg-[#000319]" id="#projects">
      <h1 className="font-outfit text-3xl font-bold text-center pb-10">
        <span className="border-b-2 border-purple-500 pb-2">
          A small selection of{" "}
          <span className="text-purple-500">recent projects</span>
        </span>
      </h1>
      <div className="flex justify-center items-center font-outfit">
        <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-20 place-items-center w-[50rem]">
          <div className="bg-[#000319] border-2 border-slate-900 rounded-3xl px-10 py-10 max-w-[380px]">
            <div className="rounded-2xl w-[300px] h-[180px] overflow-hidden">
              <Image
                src={"/codecollabss.png"}
                alt="project-image"
                height={250}
                width={300}
              />
            </div>
            <p className="font-bold text-3xl pt-8 pl-3 mb-7">Code Collab</p>
            <p className="text-wrap text-center text-gray-400">
              A platform for developers to connect, chat, and showcase projects,
              featuring OAuth login with Google, Discord, and GitHub, along with
              real-time chat.
            </p>
            <div className="flex justify-between items-center px-2 pt-8">
              <a href="https://github.com/Jowwan/CodeCollab" target="_blank">
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
                href="https://codecollab-jowan.vercel.app/"
                className="text-purple-500 font-bold hover:underline"
                target="_blank"
              >
                Check Live Site
              </a>
            </div>
          </div>
          <div className="bg-[#000319] border-2 border-slate-900 rounded-3xl px-10 py-10 max-w-[380px]">
            <div className="rounded-2xl w-[300px] h-[180px] overflow-hidden">
              <Image
                src={"/turbofplss.png"}
                alt="project-image"
                height={250}
                width={300}
              />
            </div>
            <p className="font-bold text-3xl pt-8 pl-3 mb-7">Turbo FPL</p>
            <p className="text-wrap text-center text-gray-400">
              A website that leverages the FPL API to display player and manager
              stats, featuring a machine learning model to predict player
              points.
            </p>
            <div className="flex justify-between items-center px-2 pt-8">
              <a href="https://github.com/Jowwan/Turbo-FPL" target="_blank">
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
                href="https://turbo-fpl.vercel.app/"
                className="text-purple-500 font-bold hover:underline"
                target="_blank"
              >
                Check Live Site
              </a>
            </div>
          </div>
          <div className="bg-[#000319] border-2 border-slate-900 rounded-3xl px-10 py-10 max-w-[380px]">
            <div className="rounded-2xl w-[300px] h-[180px] overflow-hidden">
              <Image
                src={"/brainswiftss.png"}
                alt="project-image"
                height={250}
                width={300}
              />
            </div>
            <p className="font-bold text-3xl pt-8 pl-3 mb-7">Brain Swift</p>
            <p className="text-wrap text-center text-gray-400">
              BrainSwift is a platform with interactive games to test and
              improve your cognitive and physical performance, featuring
              reaction time and memory challenges.
            </p>
            <div className="flex justify-between items-center px-2 pt-8">
              <a href="https://github.com/Jowwan/BrainSwift" target="_blank">
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
                href="https://brainswift.vercel.app/"
                className="text-purple-500 font-bold hover:underline"
                target="_blank"
              >
                Check Live Site
              </a>
            </div>
          </div>
          <div className="bg-[#000319] border-2 border-slate-900 rounded-3xl px-10 py-10 max-w-[380px]">
            <div className="rounded-2xl w-[300px] h-[180px] overflow-hidden">
              <Image
                src={"/brainwave.png"}
                alt="project-image"
                height={250}
                width={300}
              />
            </div>
            <p className="font-bold text-3xl pt-8 pl-3 mb-7">Brainwave</p>
            <p className="text-wrap text-center text-gray-400">
              A sleek, responsive landing page for an AI chat company,
              showcasing UI/UX design and frontend skills. Built with React,
              styled with Tailwind CSS, and powered by Vite.
            </p>
            <div className="flex justify-between items-center px-2 pt-8">
              <a href="https://github.com/Jowwan/Brainwave" target="_blank">
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
                href="https://brainwave-jowwan.vercel.app/"
                className="text-purple-500 font-bold hover:underline"
                target="_blank"
              >
                Check Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
