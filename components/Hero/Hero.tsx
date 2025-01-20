"use client";
const Hero = () => {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    contact!.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="max-w-[40rem] py-44 z-10 bg-opacity-0 pointer-events-none px-10">
      <p className="text-purple-500 font-bold font-outfit text-xl mb-3">
        <span>Hi, my name is</span>
      </p>
      <h2 className="md:text-7xl text-4xl font-outfit font-bold text-gray-100 mb-5">
        Jovan Velinov
      </h2>
      <h3 className="md:text-4xl text-xl text-purple-200 font-outfit opacity-75 mb-10">
        I love challenging myself every day
      </h3>
      <p className="md:text-2xl text-lg font-outfit text-purple-100 mb-20">
        Serbian high school student and aspiring computer scientist with a
        perfect GPA,{" "}
        <span className="text-purple-400">national programming accolades</span>,
        and a passion for building creative, full-stack applications. On a
        mission to make an <span className="font-bold">impact in tech</span>.
      </p>
      <button
        onClick={scrollToContact}
        className="pointer-events-auto relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Get in touch
        </span>
      </button>
    </div>
  );
};

export default Hero;
