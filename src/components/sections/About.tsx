import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-white lg:relative">
      <div className="mx-auto flex w-full max-w-7xl flex-col pt-20 text-center lg:flex-row lg:pt-32 lg:text-left">
        <div className="relative w-full px-4 sm:px-8 lg:w-1/2">
          <div className="flex flex-col lg:flex-row">
            <div className="inline-block lg:absolute lg:h-[171px] ">
              <div className="left-0 bottom-0 inline-block rounded-md bg-beauty-bush-400 text-coral-tree lg:absolute lg:origin-bottom-left lg:-rotate-90">
                <h2 className="about relative pl-24 text-lg font-semibold uppercase tracking-widest">
                  About&nbsp;
                </h2>
              </div>
            </div>
            <h3 className="mx-auto max-w-sm text-4xl font-semibold text-coral-tree-900 lg:ml-8">
              Building Software is my Passion
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-about justify-center lg:mt-16">
            <div className="flex min-h-[142px] items-center justify-center "></div>
            <div className="flex min-h-[142px] items-center justify-center ">
              <img src="/assets/svg/ellipse-2.svg" alt="ellipse" />
              <img
                src="/assets/svg/figma.svg"
                alt="figma"
                className="absolute max-h-[50px]"
              />
            </div>
            <div className="flex min-h-[142px] items-center justify-center "></div>
            <div className="flex min-h-[142px] items-center justify-center "></div>
            <div className="flex min-h-[142px] items-center justify-center ">
              <img src="/assets/svg/ellipse-2.svg" alt="ellipse" />
              <img
                src="/assets/svg/nodejs.svg"
                alt="nodejs"
                className="absolute max-h-[60px]"
              />
            </div>
            <div className="flex min-h-[142px] items-center justify-center ">
              <img src="/assets/svg/ellipse-1.svg" alt="ellipse" />
              <img
                src="/assets/svg/react.svg"
                alt="react"
                className="absolute max-h-[60px]"
              />
            </div>
            <div className="flex min-h-[142px] items-center justify-center ">
              <img src="/assets/svg/ellipse-2.svg" alt="ellipse" />
              <img
                src="/assets/svg/redux.svg"
                alt="redux"
                className="absolute max-h-[60px]"
              />
            </div>
            <div className="flex min-h-[142px] items-center justify-center ">
              <img src="/assets/svg/ellipse-1.svg" alt="ellipse" />
              <img
                src="/assets/svg/wordpress.svg"
                alt="wordpress"
                className="absolute max-h-[60px]"
              />
            </div>
            <div className="flex min-h-[142px] items-center justify-center "></div>
            <div className="flex min-h-[142px] items-center justify-center ">
              <img src="/assets/svg/ellipse-2.svg" alt="ellipse" />
              <img
                src="/assets/svg/laravel.svg"
                alt="laravel"
                className="absolute max-h-[60px]"
              />
            </div>
            <div className="flex min-h-[142px] items-center justify-center "></div>
            <div className="flex min-h-[142px] items-center justify-center "></div>
          </div>
        </div>
        <div className="w-full px-4 sm:px-8 lg:w-1/2">
          <div className="relative hidden h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:h-full lg:w-1/2">
            <div className="absolute top-0 right-0 z-0 hidden w-full max-w-[800px] lg:block">
              <img
                className="absolute top-0 left-0 z-0 w-full max-w-[700px]"
                src="/assets/svg/vector-2.svg"
                alt=""
              />
            </div>
          </div>
          <div className="relative z-10 text-xl lg:text-2xl">
            {' '}
            <p className="mt-8 lg:mt-40 ">
              With 7+ years of experience, I still look for new development
              challenges and learning emerging technologies.
            </p>
            <p className="mt-4 ">
              I do everything with a twist, I&apos;m a developer that is unique
              and different.
            </p>
            <p className="mt-4 ">
              Skill-wise, I consider myself as well-rounded developer who works
              well both on the front-end and in the back-end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
