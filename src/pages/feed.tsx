import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import AddPost from "views/feed/AddPost";
import HomeFeed from "views/feed/HomeFeed";

const Feed = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button onClick={() => navigate("/profile")}>profile</Button>
      <Button onClick={() => (localStorage.clear(), navigate("/signin"))}>
        signin
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={0} md={2}></Grid>
        <Grid item xs={12} sm={9} md={7}>
          <AddPost />
          <HomeFeed />
        </Grid>
        <Grid item xs={0} sm={3} md={3}></Grid>
      </Grid>
    </Box>
  );
};

export default Feed;
