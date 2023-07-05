import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

const ModalContext = createContext((_: ReactNode) => {});

export const ModalProvider = (props: { children: ReactNode }) => {
  const [modal, setModal] = useState<ReactNode>(undefined);
  const resetModal = useCallback(() => {
    setModal(undefined);
  }, [setModal]);
  return (
    <ModalContext.Provider value={setModal as (modal: ReactNode) => {}}>
      {props.children}
      {!!modal && (
        <div
          className="fixed z-50 top-0 left-0 dark:bg-black
            bg-opacity-75 bg-white backdrop-blur-sm backdrop-filter
            cursor-pointer w-screen h-[calc(100vh-4rem)] overflow-hidden
            p-8 md:mt-16"
          onClick={resetModal}
        >
          {modal}
        </div>
      )}
    </ModalContext.Provider>
  );
};

export function useModal() {
  return useContext(ModalContext);
}
