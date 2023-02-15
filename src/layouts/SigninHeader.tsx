import { Box, Button, Typography } from "@mui/material";
import { logo } from "assets";

const SigninHeader = () => {
  return (
    <Box
      p={3}
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
        <Box display="flex">
          <Typography variant="h3" sx={{ color: "#0A66C2" }}>
            Linked
          </Typography>
          <Box pl={0.1}>
            <img src={logo} alt="Linked" width={36} />
          </Box>
        </Box>
        <Box display="flex">
          <Button color="secondary">Join Now</Button>
          <Box ml={2}>
            <Button variant="contained">Sign in</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SigninHeader;
