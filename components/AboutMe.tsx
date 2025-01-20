import React from "react";

import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div
      className="py-32 w-full xl:px-56 md:px-20 px-5 bg-[#000319]"
      id="#about"
    >
      <h1 className="font-outfit text-3xl font-bold text-center pb-10">
        <span className="border-b-2 border-purple-500 pb-2">
          About <span className="text-purple-500">me</span>
        </span>
      </h1>

      <div className="font-outfit w-full mt-12 grid 2xl:grid-cols-4 grid-cols-1 gap-10">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="min-h-40 py-5 flex justify-center items-center text-xl">
            <p className="px-16">
              <span className="text-purple-400 font-bold">My goal</span> is to
              create meaningful technology that improves lives, combining my
              technical expertise with a{" "}
              <span className="text-purple-500 font-bold">
                desire to innovate and inspire
              </span>{" "}
              others in the tech community.
            </p>
          </div>
        </Button>
        <Button
          //   random duration will be fun , I think , may be not
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="text-white border-slate-800"
        >
          <div className="flex flex-col gap-5 text-xl min-h-40 py-5 justify-center items-center">
            <p>
              2024 Serbian Competitive Programming{" "}
              <span className="text-purple-500 font-bold">Olympiad</span>
            </p>
            <p>
              2024 National Competitive Programming Competition{" "}
              <span className="font-bold">3rd Place</span>
            </p>
          </div>
        </Button>
        <Button
          //   random duration will be fun , I think , may be not
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="text-white border-slate-800"
        >
          <div className="min-h-40 py-5 flex justify-center items-center text-xl">
            <p className="px-10">
              I hold both <span className="text-purple-400 font-bold">FCE</span>{" "}
              and <span className="text-purple-500 font-bold">CAE</span>{" "}
              diplomas, achieved with an A grade, demonstrating a{" "}
              <span className="text-purple-400 font-bold">C2 level</span> of
              English proficiency.
            </p>
          </div>
        </Button>
        <Button
          //   random duration will be fun , I think , may be not
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="min-h-40 py-5 flex justify-center items-center text-xl">
            <p className="px-16">
              As someone with a strong foundation in{" "}
              <span className="text-purple-400 font-bold">C</span> and{" "}
              <span className="text-purple-400 font-bold">C++</span>, I have
              continually expanded my technical skill set over the past{" "}
              <span className="text-purple-500 font-bold">4+ years</span> of
              coding experience.
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Experience;
