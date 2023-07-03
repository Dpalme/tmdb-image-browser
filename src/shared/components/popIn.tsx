import { ReactNode } from 'react';
import { m, useReducedMotion } from 'framer-motion';

export const PopInAnimation = (props: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const yDisplacement = shouldReduceMotion ? 0 : '100%';

  return (
    <div className="overflow-hidden h-fit">
      <m.div
        initial={{ y: yDisplacement, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.5, delay: props.delay || 0 }}
        className={['h-fit box-border', props.className].join(' ')}
      >
        {props.children}
      </m.div>
    </div>
  );
};
