import React from 'react';

const Services = () => {
  return (
    <div id="services" className="pt-20  lg:pt-32">
      <div
        id="aboutline"
        className="relative bg-white px-4 text-white lg:relative "
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col text-center lg:flex-row lg:text-left">
          <div className="relative mt-4 rounded-xl bg-coral-tree-500 py-8 lg:mt-0 lg:w-1/2 lg:rounded-none lg:rounded-tl-xl lg:p-8 ">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-coral-tree-800"></div>
                <img
                  className="absolute w-8"
                  src="/assets/svg/icon1.svg"
                  alt="icon1"
                />
              </div>
              <h3 className="ml-4 text-2xl text-coral-tree-50">
                Product Development
              </h3>
            </div>
            <p className="p-6 pb-0 text-lg">
              From start to finish, I will help you reinvent research and
              ideation to build the perfect product. Collaborate with me and
              let&apos;s take your product to the next level.
            </p>
          </div>
          <div className="relative mt-4 rounded-xl bg-coral-tree-500 py-8 lg:mt-0 lg:w-1/2 lg:rounded-none lg:rounded-tr-xl lg:p-8 ">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-coral-tree-800"></div>
                <img
                  className="absolute w-8"
                  src="/assets/svg/icon2.svg"
                  alt="icon2"
                />
              </div>
              <h3 className="ml-4 text-2xl text-coral-tree-50">UX/UI Design</h3>
            </div>
            <p className="p-6 pb-0 text-lg">
              Understanding what the user wants and needs to create a good user
              experience. Creating beautiful and intuitive software UI design is
              one of my underrated skills.
            </p>
          </div>
        </div>
        <div className="mx-auto hidden h-[2px] max-w-6xl bg-coral-tree-50 lg:block"></div>
        <div className="mx-auto flex w-full max-w-6xl flex-col text-center lg:flex-row lg:text-left">
          <div className="relative mt-4 rounded-xl bg-coral-tree-500 py-8 lg:mt-0 lg:w-1/2 lg:rounded-none lg:rounded-bl-xl lg:p-8 ">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-coral-tree-800"></div>
                <img
                  className="absolute w-8"
                  src="/assets/svg/icon3.svg"
                  alt="icon3"
                />
              </div>
              <h3 className="ml-4 text-2xl text-coral-tree-50">
                Software Development
              </h3>
            </div>
            <p className="p-6 pb-0 text-lg">
              I make sure my code is easily readable and understandable. When
              you have a problem; it&apos;s definite that I have a solution. 😊
            </p>
          </div>
          <div className="relative mt-4 rounded-xl bg-coral-tree-500 py-8 lg:mt-0 lg:w-1/2 lg:rounded-none lg:rounded-br-xl lg:p-8">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-coral-tree-800"></div>
                <img
                  className="absolute w-8"
                  src="/assets/svg/icon4.svg"
                  alt="icon4"
                />
              </div>
              <h3 className="ml-4 text-2xl text-coral-tree-50">Other Skills</h3>
            </div>
            <p className="p-6 pb-0 text-lg">
              There is nothing related to software development that I can&apos;t
              do. I&apos;m highly adaptable and flexible in learning and
              exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
