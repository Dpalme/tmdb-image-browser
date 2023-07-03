import { ReactNode } from 'react';
import { m } from 'framer-motion';
import { ResponsiveBackground } from './responsiveBackground';

export const Container = (props: {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
  containerClass?: string;
}) => {
  return (
    <m.section
      layoutScroll
      layout
      initial={{
        opacity: 0,
        x: '100%',
        zIndex: 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        zIndex: 0,
      }}
      exit={{
        opacity: 0,
        zIndex: 0,
      }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-screen h-screen overflow-hidden fixed top-0"
    >
      {props.backgroundImage !== undefined && (
        <ResponsiveBackground imagePath={props.backgroundImage} />
      )}
      <div
        className="pl-12 pt-8 pb-16 md:pb-4 md:pt-16 pr-4 h-screen overflow-y-auto
      w-full max-w-full overflow-x-hidden min-h-full overscroll-contain @container"
      >
        <div
          className={[
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_3fr] gap-16 pb-16',
            'drop-shadow-sm',
            props.containerClass?.includes('items-')
              ? props.containerClass
              : ['md:items-start', props.containerClass].join(' '),
          ].join(' ')}
        >
          {props.children}
        </div>
      </div>
    </m.section>
  );
};
