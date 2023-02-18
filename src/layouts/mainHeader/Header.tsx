import { Box, Button, Divider, Typography } from "@mui/material";
import { logo } from "assets";
import Avatar from "components/Avatar";
import { HeaderIcons } from "components/BasicComponents";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledAvatar, StyledHeader } from "styles";
import { headerIconData } from "utils";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
            <Avatar name="shahid azam" image="/static/images/avatar/1.jpg">
              <Box p={2}>
                <Typography variant="subtitle2">Shahid azam</Typography>
                <Typography mt={1} variant="body2">
                  web Developer
                </Typography>
                <Button
                  sx={{ mt: 2 }}
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => navigate("/profile")}
                >
                  View Profile
                </Button>
              </Box>
              <Divider />
              <Box p={2}>
                <Button color="secondary" onClick={() => navigate("/signin")}>
                  Log out
                </Button>
              </Box>
            </Avatar>
          </StyledAvatar>
        </Box>
      </Box>
    </StyledHeader>
  );
};

export default Header;
