import { ApplicationRouter } from './Router';
import Navbar from './shared/components/navbar';
import { ModalProvider } from './shared/hooks/useModal';

function App() {
  return (
    <>
      <Navbar />
      <ModalProvider>
        <ApplicationRouter />
      </ModalProvider>
    </>
  );
}

export default App;
