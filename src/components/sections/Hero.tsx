import React from 'react';

const Hero = () => {
  return (
    <div className="bg-coral-tree-500 lg:relative">
      <div className="mx-auto flex w-full max-w-7xl items-center pt-16 pb-20 text-center lg:min-h-[calc(100vh-90px)] lg:text-left">
        <div className="mx-auto px-4 sm:px-8 lg:ml-0 lg:w-1/2 xl:pr-16">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Hi! I&apos;m<span className="font-bold"> Lee</span>{' '}
          </h1>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            A full-stack developer, specializing in <div>React Ecosystem</div>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
            Started working as a Cobol Developer in 2011, Found green screen
            boring and decided to jump shift to Web Development
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-coral-tree-600 px-8 py-3 text-base font-medium text-white shadow hover:bg-coral-tree-700 md:py-4 md:px-10 md:text-lg"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-64 min-h-[480px] w-full sm:min-h-[640px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <div className="absolute bottom-0 right-0 w-full max-w-[800px]">
          <img
            className="relative z-10 w-full"
            src="/assets/images/me.png"
            alt="me"
          />
          <img
            className="absolute bottom-0 left-0 z-0 w-full max-w-[700px]"
            src="/assets/svg/vector-1.svg"
            alt=""
          />
        </div>
      </div>
      <img
        className="absolute bottom-0 left-1/2 mb-2 hidden w-8 -translate-x-1/2 lg:block lg:block"
        src="/assets/svg/arrow-down.svg"
        alt="arrow-down"
      />
    </div>
  );
};

export default Hero;
