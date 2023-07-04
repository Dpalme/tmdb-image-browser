import { m } from 'framer-motion';

export const InfiniteScrollTrigger = (props: {
  fetchNextPage: CallableFunction;
}) => {
  return <m.div onViewportEnter={() => props.fetchNextPage()}></m.div>;
};
