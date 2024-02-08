import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import Navbar from './shared/components/navbar';
import { ModalProvider } from './shared/hooks/useModal';
import { QueryClient } from '@tanstack/react-query';

export const rootRoute = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({ component: App });

function App() {
  return (
    <>
      <Navbar />
      <ModalProvider>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <Outlet />
      </ModalProvider>
      <TanStackRouterDevtools />
    </>
  );
}

export default rootRoute;
