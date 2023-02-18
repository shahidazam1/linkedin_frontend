import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import OrComponent, { LogoText } from "components/BasicComponents";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "grey", height: "100vh" }}>
      <Box maxWidth={1600}>
        <LogoText />
        <Box my={4} textAlign="center">
          <Typography variant="h3">
            Make the most of your professional life
          </Typography>
        </Box>
        <Box
          p={4}
          maxWidth={500}
          sx={{
            backgroundColor: "white",
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          <Box>
            <TextField fullWidth id="filled-error" label="Email or Phone" />
          </Box>
          <Box mt={3}>
            <TextField fullWidth id="filled-error" label="Password" />
          </Box>
          <Box mt={2}>
            <Typography textAlign="center" variant="body2">
              By clicking Agree & Join, you agree to the LinkedIn User
              Agreement, Privacy Policy, and Cookie Policy.
            </Typography>
          </Box>
          <Box mt={3}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/feed")}
            >
              Agree & Join
            </Button>
          </Box>
          <OrComponent />
          <Typography textAlign="center" variant="body1">
            Already on LinkedIn
            <Button onClick={() => navigate("/signin")}>Signin</Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
