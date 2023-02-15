import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { linkedin_signin } from "assets";
import SigninHeader from "layouts/SigninHeader";

const Signin = () => {
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
                <TextField
                  fullWidth
                  id="filled-error"
                  label="Email or Phone"
                  variant="filled"
                />
              </Box>
              <Box mt={3}>
                <TextField
                  fullWidth
                  id="filled-error"
                  label="Password"
                  variant="filled"
                />
              </Box>
              <Box mt={3}>
                <Button>Forgot Password</Button>
              </Box>
              <Box mt={3}>
                <Button fullWidth variant="contained">
                  Sign in
                </Button>
              </Box>
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
              <Box mt={3}>
                <Button fullWidth variant="outlined">
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
