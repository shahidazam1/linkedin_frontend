import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar as AvtImg,
  Box,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Avatar = ({ children, image, name }: any) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Box onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <AvtImg alt={name} src={image} sx={{ width: 40, heignt: 35 }} />
        <Typography variant="body2">Me</Typography>
      </Box>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        onClick={handleCloseUserMenu}
      >
        {children}
      </Menu>
    </Box>
  );
};

export default Avatar;
