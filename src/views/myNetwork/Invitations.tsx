import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { shahid } from "assets";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { StyledFlex } from "styles";

interface Types {
  name: string;
  headline: string;
  acceptAction: any;
  rejectAction: any;
}

const InvitationView = ({
  name,
  headline,
  acceptAction,
  rejectAction,
}: Types) => {
  return (
    <StyledFlex sx={{ backgroundColor: "white", p: 2, mt: 2 }}>
      <Box display="flex">
        <Avatar src={shahid} alt="shahid" />
        <Box ml={2}>
          <Typography variant="subtitle2">{name}</Typography>
          <Typography variant="body2">{headline}</Typography>
        </Box>
      </Box>
      <Box display="flex">
        <IconButton onClick={acceptAction}>
          <CheckCircleOutlineOutlinedIcon fontSize="large" color="primary" />
        </IconButton>
        <IconButton onClick={rejectAction}>
          <CancelOutlinedIcon fontSize="large" color="warning" />
        </IconButton>
      </Box>
    </StyledFlex>
  );
};

export default InvitationView;
