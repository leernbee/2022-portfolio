import React from 'react';

const ProjectCard = ({ link = '', image = '', title = '', desc = '' }) => {
  return (
    <div className="relative mx-auto mt-12 w-full px-4 lg:max-w-fit">
      {/* <div className="absolute right-2 top-2 hidden lg:block">
        <img
          style={{
            filter:
              'invert(52%) sepia(8%) saturate(2033%) hue-rotate(317deg) brightness(91%) contrast(83%)',
          }}
          className="h-8 w-8"
          src="/assets/svg/github.svg"
          alt="github"
        />
      </div> */}
      <div className="w-full rounded-lg bg-coral-tree-50 p-2 lg:w-[640px]">
        <img src={image} alt="image" />
      </div>
      <div className="relative -mt-12  w-full rounded-lg rounded-br-3xl bg-coral-tree-500 p-4 lg:ml-16 lg:w-[640px]">
        <h4 className="text-xl font-semibold text-beauty-bush-400">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <p className="mt-2 pr-8 text-lg text-coral-tree-800">{desc}</p>
        <div className="absolute top-20 right-0 h-[1px] w-8 bg-white"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
