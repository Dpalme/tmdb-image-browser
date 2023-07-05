import { ReactNode } from 'react';
import { ResponsiveBackground } from './tmdbimages/responsiveBackground';

export const Container = (props: {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
  containerClass?: string;
  sectionClass?: string;
}) => {
  return (
    <section
      className={[
        'w-screen h-screen overflow-hidden fixed top-0',
        props.sectionClass,
      ].join(' ')}
    >
      {props.backgroundImage !== undefined && (
        <ResponsiveBackground imagePath={props.backgroundImage} />
      )}
      <div
        className="p-8 md:pb-4 md:mb-0
        h-[calc(100vh-4rem)] md:mt-16 overflow-y-auto w-full
        max-w-full overflow-x-hidden overscroll-contain
        @container"
      >
        <div
          className={[
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_3fr] gap-16',
            'drop-shadow-sm',
            props.containerClass?.includes('items-')
              ? props.containerClass
              : ['md:items-start', props.containerClass].join(' '),
          ].join(' ')}
        >
          {props.children}
        </div>
      </div>
    </section>
  );
};
