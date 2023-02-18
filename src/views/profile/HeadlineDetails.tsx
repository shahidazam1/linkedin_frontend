import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { logo } from "assets";
import SimapleButton from "components/SimapleButton";
import { StyledCardWraper } from "styles";
import EditIcon from "components/EditIcon";

const HeadlineDetails = () => {
  return (
    <StyledCardWraper>
      <Box>
        <Box sx={{ height: "100px" }}>Image space</Box>
        <EditIcon handleClickEdit={""} />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box>
              <Typography variant="subtitle1">Name</Typography>
              <Typography variant="body1">Name</Typography>
              <Typography variant="body2">Name</Typography>
              <SimapleButton title="123 Connections" handleClick={"none"} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Box display="flex">
                <img src={logo} alt="image" width={35} height={35} />
                <Typography variant="subtitle2">Company name</Typography>
              </Box>
              <Box mt={1} display="flex">
                <img src={logo} alt="image" width={35} height={35} />
                <Typography variant="subtitle2">Company name</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledCardWraper>
  );
};

export default HeadlineDetails;
