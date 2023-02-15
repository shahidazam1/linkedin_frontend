import { Box, Divider, Grid, Typography } from "@mui/material";
import { logo } from "assets";

const OrComponent = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={2} display="flex" alignItems="center">
        <Grid item xs={5.5}>
          <Divider />
        </Grid>
        <Grid item xs={1}>
          <Typography p={1} variant="body1">
            or
          </Typography>
        </Grid>
        <Grid item xs={5.5}>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrComponent;

export const LogoText = () => {
  return (
    <Box display="flex">
      <Typography variant="h3" sx={{ color: "#0A66C2" }}>
        Linked
      </Typography>
      <Box pl={0.1}>
        <img src={logo} alt="Linked" width={36} />
      </Box>
    </Box>
  );
};
