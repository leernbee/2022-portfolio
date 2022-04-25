import Link from 'next/link';
import React from 'react';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
];

const Header = () => {
  return (
    <header className="relative z-20 bg-coral-tree-600">
      <nav
        className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="flex w-full items-center justify-between border-b border-coral-tree-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href={'/'}>
              <a>
                <span className="sr-only">Lee</span>
                <img
                  className="h-10 w-auto"
                  src="/assets/svg/logo.svg"
                  alt="logo"
                />
              </a>
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-coral-tree-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="mailto:lgdelrosario@outlook.com"
              className="inline-block cursor-pointer rounded-md border border-transparent bg-coral-tree-500 py-2 px-4 text-base font-medium text-white hover:bg-coral-tree-400"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-coral-tree-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
