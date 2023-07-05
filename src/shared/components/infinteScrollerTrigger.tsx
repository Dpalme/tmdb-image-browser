import { useEffect, useRef } from 'react';
import { useIsOnScreen } from '../hooks/useIsOnScreen';

export const InfiniteScrollTrigger = (props: {
  fetchNextPage: CallableFunction;
  padding?: number;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsOnScreen(itemRef);
  useEffect(() => {
    isVisible && props.fetchNextPage();
  }, [isVisible]);
  return (
    <div
      ref={itemRef}
      style={{ transform: `translateY(${(props.padding || 0) * -1}px)` }}
    ></div>
  );
};
