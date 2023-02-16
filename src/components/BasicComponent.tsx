import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { logo } from "assets";
import { useNavigate } from "react-router-dom";

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

export const HeaderIcons = ({ icon, name, isActive, path }: any) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        ml: 4,
        borderBottom: isActive ? "3px solid blue" : "none",
        "@media (max-width: 650px)": {
          ml: 2,
          borderBottom: "none",
        },
      }}
      textAlign="center"
      onClick={() => navigate(`${path}`)}
    >
      <IconButton color={isActive ? "primary" : "default"}>{icon}</IconButton>
      <Typography
        sx={{
          "@media (max-width: 650px)": {
            display: "none",
          },
        }}
        variant="body2"
      >
        {name}
      </Typography>
    </Box>
  );
};
