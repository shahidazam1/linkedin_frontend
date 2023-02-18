import { Avatar, Box, Typography } from "@mui/material";
import { logo } from "assets";
import { HeaderIcons } from "components/BasicComponent";
import { useLocation } from "react-router-dom";
import { StyledAvatar, StyledHeader } from "styles";
import { headerIconData } from "utils";

const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
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
          <StyledAvatar>
            <Avatar
              alt="shahid Azam"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, heignt: 35 }}
            />
            <Typography variant="body2">Me</Typography>
          </StyledAvatar>
        </Box>
      </Box>
    </StyledHeader>
  );
};

export default Header;
