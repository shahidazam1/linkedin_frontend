import { Box, Grid } from "@mui/material";
import { StyledCardWraper } from "styles";
import About from "views/profile/About";
import Analytics from "views/profile/Analytics";
import Education from "views/profile/Education";
import Experience from "views/profile/Experience";
import HeadlineDetails from "views/profile/HeadlineDetails";
import Skills from "views/profile/Skills";

const Profile = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={0} md={2}></Grid>
        <Grid item xs={12} sm={9} md={7}>
          <HeadlineDetails />
          <Analytics />
          <About />
          <Experience />
          <Education />
          <Skills />
        </Grid>
        <Grid item xs={0} sm={3} md={3}></Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
