import React from 'react';

import ProjectCard from '../projects/ProjectCard';

const Projects = () => {
  return (
    <div id="projects" className="mt-20 bg-gray-50 lg:relative lg:mt-32">
      <div className="mx-auto w-full max-w-5xl py-20 text-center lg:py-32">
        <div className="inline-block rounded-md bg-beauty-bush-400 text-coral-tree">
          <h2 className="about relative pl-24 text-lg font-semibold uppercase tracking-widest">
            PROJECT&nbsp;
          </h2>
        </div>
        <h3 className="mx-auto mt-3 max-w-md text-4xl font-semibold leading-tight text-coral-tree-900">
          I Enjoy What I Do
        </h3>
        <div className="text-left">
          <ProjectCard
            link="https://paymongo-landing-page-clone.vercel.app/"
            title="Paymongo Clone"
            desc="A clone of landing page made with Tailwind from Webflow"
            image="/assets/images/paymongo.jpg"
          />

          <ProjectCard
            link="https://firstx.ai"
            title="FirstX Conversation using Twitter API"
            desc="A streamlined Twitter outreach marketing technology platform"
            image="/assets/images/firstx.jpg"
          />
          <ProjectCard
            link="https://vinerahub.com"
            title="Vinerahub Wine Experience Booking Platform"
            desc="A wine experience booking platform built with Laravel"
            image="/assets/images/vinerahub.jpg"
          />
          <ProjectCard
            link="https://icomply.ph"
            title="iComply Business Case Study"
            desc="iComply is an End-to-end services from incorporation to accounting"
            image="/assets/images/icomply.jpg"
          />
          <ProjectCard
            link="https://growtechfarms.com/"
            title="Growtech Farms Shopify eCommerce"
            desc="Growtech Farms was established to elevate the Agriculture sector"
            image="/assets/images/growtech.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
