import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { linkedin_signin } from "assets";
import OrComponent from "components/BasicComponent";
import SigninHeader from "layouts/SigninHeader";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <Box p={3} maxWidth={1500} margin="auto">
      <SigninHeader />
      <Grid mt={8} container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box mt={3}>
            <Typography variant="h3" sx={{ color: "#8F5849" }}>
              Welcome to your professional community
            </Typography>
            <Box sx={{ maxWidth: "500px", mt: 3 }}>
              <Box>
                <TextField fullWidth id="filled-error" label="Email or Phone" />
              </Box>
              <Box mt={3}>
                <TextField fullWidth id="filled-error" label="Password" />
              </Box>
              <Box mt={3}>
                <Button>Forgot Password</Button>
              </Box>
              <Box mt={3}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate("/feed")}
                >
                  Sign in
                </Button>
              </Box>
              <OrComponent />
              <Box mt={3}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onClick={() => navigate("/signup")}
                >
                  New to LinkedIn? Join now
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} textAlign="center">
          <Box>
            <img
              src={linkedin_signin}
              alt="linkedin"
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signin;
