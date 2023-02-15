import { Box, Button } from "@mui/material";
import { LogoText } from "components/BasicComponent";
import { useNavigate } from "react-router-dom";

const SigninHeader = () => {
  const navigate = useNavigate();

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
        <LogoText />
        <Box display="flex">
          <Button color="secondary" onClick={() => navigate("/signup")}>
            Join Now
          </Button>
          <Box ml={2}>
            <Button variant="contained" onClick={() => navigate("/signin")}>
              Sign in
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SigninHeader;
