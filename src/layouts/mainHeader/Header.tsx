import { Box } from "@mui/material";
import { logo } from "assets";
import { HeaderIcons } from "components/BasicComponent";
import { useLocation } from "react-router-dom";
import { headerIconData } from "utils";

const Header = () => {
  const location = useLocation();

  return (
    <Box
      p={2}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 12,
        background: "#FFFFFF",
        width: "100%",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <img src={logo} alt="" width={30} />
        </Box>
        <Box display="flex" alignItems="center">
          {headerIconData?.map((item, index) => (
            <HeaderIcons
              key={index}
              icon={item.icon}
              name={item.name}
              path={item.path}
              isActive={location.pathname.includes(item.path)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
