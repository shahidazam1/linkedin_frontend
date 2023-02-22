import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledFlex } from "styles";
import ConnectionSuggestions from "views/myNetwork/ConnectionSuggestions";

const MyNetwork = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={0} md={2}></Grid>
        <Grid item xs={12} sm={9} md={7}>
          <StyledFlex sx={{ p: 1, background: "white" }}>
            <Typography variant="subtitle2">Manage Your Network</Typography>
            <ArrowForwardIcon color="secondary" />
          </StyledFlex>
          <StyledFlex
            sx={{ p: 2, mt: 1, background: "white", borderRadius: "10px" }}
            onClick={() => navigate("invitations")}
          >
            <Typography variant="subtitle2">Invitations</Typography>
            <ArrowForwardIcon color="secondary" />
          </StyledFlex>
          <ConnectionSuggestions />
        </Grid>
        <Grid item xs={0} sm={3} md={3}></Grid>
      </Grid>
    </Box>
  );
};

export default MyNetwork;
