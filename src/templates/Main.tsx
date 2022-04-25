import { ReactNode } from 'react';

import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased">
    {props.meta}
    <Header />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export { Main };
