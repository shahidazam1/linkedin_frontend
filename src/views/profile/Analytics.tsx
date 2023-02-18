import { Box, Typography } from "@mui/material";
import { StyledCardWraper } from "styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Grid from "@mui/material/Grid";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";

const Analytics = () => {
  return (
    <StyledCardWraper>
      <Box>
        <Typography variant="subtitle1">Analytics</Typography>
        <Typography variant="body2" display="flex" alignItems="center">
          <RemoveRedEyeIcon fontSize="small" color="secondary" /> Private to you
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              mt={2}
              variant="subtitle2"
              display="flex"
              alignItems="center"
              sx={{
                "&:hover": {
                  color: "#2977C9",
                  textDecoration: "underline",
                },
                cursor: "pointer",
              }}
            >
              <PeopleAltIcon
                fontSize="small"
                color="secondary"
                sx={{ mr: 1 }}
              />
              60 profile views
            </Typography>
            <Typography ml={3.6} variant="body2">
              Discover who's viewed your profile.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              mt={2}
              variant="subtitle2"
              display="flex"
              alignItems="center"
              sx={{
                "&:hover": {
                  color: "#2977C9",
                  textDecoration: "underline",
                },
                cursor: "pointer",
              }}
            >
              <SearchIcon fontSize="small" color="secondary" sx={{ mr: 1 }} />
              25 search appearances
            </Typography>
            <Typography ml={3.6} variant="body2">
              See how often you appear in search results.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyledCardWraper>
  );
};

export default Analytics;
