import { Avatar, Box, Button, Typography } from "@mui/material";
import { shahid } from "assets";
import { StyledFlex } from "styles";

const Connections = () => {
  return (
    <Box sx={{ background: "white" }} p={2}>
      <StyledFlex>
        <Box display="flex">
          <Box>
            <Avatar src={shahid} alt="shahid" />
          </Box>
          <Box pl={1}>
            <Typography variant="subtitle2">shahid azam</Typography>
            <Typography variant="body2">web developer</Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              kurnool
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button variant="outlined" color="primary">
            Message
          </Button>
        </Box>
      </StyledFlex>
    </Box>
  );
};

export default Connections;
