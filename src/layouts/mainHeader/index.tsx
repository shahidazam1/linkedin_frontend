import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainHeader = () => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box pt={13}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainHeader;
