import { ReactNode } from 'react';
import { ResponsiveBackground } from './tmdbimages/responsiveBackground';

export const Container = (props: {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
  gridClass?: string;
  containerClass?: string;
  sectionClass?: string;
  relative?: boolean;
}) => {
  return (
    <section
      className={[
        props.sectionClass,
        !props.relative && 'fixed top-0 w-screen h-screen overflow-hidden',
      ].join(' ')}
    >
      {!!props.backgroundImage && (
        <ResponsiveBackground imagePath={props.backgroundImage} />
      )}
      <div
        className={[
          'p-8 md:pb-4 md:mb-0',
          'md:mt-16 overflow-y-auto w-full',
          'max-w-full overflow-x-hidden overscroll-contain',
          '@container',
          !props.relative && 'h-[calc(100vh-4rem)] ',
          props.containerClass,
        ].join(' ')}
      >
        <div
          className={[
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_3fr] gap-16',
            'drop-shadow-sm',
            props.gridClass?.includes('items-')
              ? props.gridClass
              : ['md:items-start', props.gridClass].join(' '),
          ].join(' ')}
        >
          {props.children}
        </div>
      </div>
    </section>
  );
};
