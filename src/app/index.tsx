import RoutesContainer from "./RoutesContainer";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ConfirmDialogProvider from "components/ConfirmDialogProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfirmDialogProvider>
          <RoutesContainer />
        </ConfirmDialogProvider>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
};

export default App;
