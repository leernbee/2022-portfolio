import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="My Portfolio - Lliño Del Rosario"
          description="This is my portfolio made with Nextjs and Tailwind CSS."
        />
      }
    >
      <Hero />
      <About />
      <Services />
      <Projects />
    </Main>
  );
};

export default Index;
