import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { AnimatePresence, m } from 'framer-motion';

const ModalContext = createContext((_: ReactNode) => {});

export const ModalProvider = (props: { children: ReactNode }) => {
  const [modal, setModal] = useState<ReactNode>(undefined);
  const resetModal = useCallback(() => {
    setModal(undefined);
  }, [setModal]);
  return (
    <ModalContext.Provider value={setModal as (modal: ReactNode) => {}}>
      <AnimatePresence initial={true} mode="sync">
        {props.children}
        {!!modal && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-50 top-0 left-0 dark:bg-black
            bg-opacity-25 bg-white backdrop-blur-sm
            cursor-pointer w-screen h-screen overflow-hidden
        p-4 lg:p-16"
            onClick={resetModal}
          >
            {modal}
          </m.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};

export function useModal() {
  return useContext(ModalContext);
}
