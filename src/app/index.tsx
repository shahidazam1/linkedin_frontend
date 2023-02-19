import RoutesContainer from "./RoutesContainer";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ConfirmDialogProvider from "components/ConfirmDialogProvider";
import { ToastContainer } from "react-toastify";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "react-toastify/dist/ReactToastify.css";
import { LocalizationProvider } from "@mui/x-date-pickers";

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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ConfirmDialogProvider>
            <RoutesContainer />
          </ConfirmDialogProvider>
        </LocalizationProvider>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
};

export default App;
