import { Box, Grid } from "@mui/material";
import { getMyProfile } from "api/services/profile";
import Loader from "components/Loader";
import { useQuery } from "react-query";
import About from "views/profile/About";
import Analytics from "views/profile/Analytics";
import Education from "views/profile/Education";
import Experience from "views/profile/Experience";
import HeadlineDetails from "views/profile/HeadlineDetails";
import Skills from "views/profile/Skills";

const Profile = () => {
  const { data, isLoading } = useQuery("profile", getMyProfile);
  console.log(data);

  if (isLoading) return <Loader />;
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={0} md={2}></Grid>
        <Grid item xs={12} sm={9} md={7}>
          <HeadlineDetails profileData={data?.data} />
          <Analytics />
          <About profileData={data?.data} />
          <Experience profileData={data?.data} />
          <Education profileData={data?.data} />
          <Skills profileData={data?.data} />
        </Grid>
        <Grid item xs={0} sm={3} md={3}></Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
