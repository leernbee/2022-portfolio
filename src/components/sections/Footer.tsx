import React from 'react';

const Footer = () => {
  return (
    <div className="relative bg-coral-tree-900 text-white lg:relative ">
      <div className="mx-auto flex w-full max-w-7xl  flex-col items-center px-4 py-16 text-center lg:flex-row lg:text-left xl:px-0">
        <div className="lg:w-1/2">
          <h3 className="text-3xl">Let&apos;s make something awesome!</h3>
        </div>
        <div className="mt-6 text-center lg:mt-0 lg:w-1/2 lg:text-right">
          <a
            href="mailto:lgdelrosario@outlook.com"
            className="inline-block items-center justify-center rounded-md border border-transparent bg-coral-tree-500 py-2 px-4 text-base font-medium text-white hover:bg-coral-tree-600"
          >
            Hire Me
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl text-center">
        <img className="mx-auto h-16" src="/assets/svg/logo.svg" alt="logo" />
        <p className="py-3 text-sm">
          © 2022 Lliño Del Rosario, All Rights Reserved.
        </p>
      </div>
      <div className="h-2 w-full bg-coral-tree-500"></div>
    </div>
  );
};

export default Footer;
