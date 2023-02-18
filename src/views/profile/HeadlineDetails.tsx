import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { logo, shahid } from "assets";
import SimapleButton from "components/SimapleButton";
import { StyledCardWraper } from "styles";
import EditIcon from "components/EditIcon";
import Avatar from "@mui/material/Avatar";

const HeadlineDetails = ({ profileData }: any) => {
  return (
    <StyledCardWraper>
      <Box>
        <Box sx={{ position: "relative" }}>
          <img
            src={shahid}
            alt=""
            width="100%"
            height="160px"
            style={{ objectFit: "cover" }}
          />
          <Avatar
            src={shahid}
            alt=""
            sx={{
              width: 150,
              height: 150,
              position: "absolute",
              top: 55,
              left: 10,
              border: "3px solid white",
            }}
          />
        </Box>
        <EditIcon handleClickEdit={""} />
        <Grid mt={3} container spacing={2}>
          <Grid item xs={7}>
            <Box>
              <Typography variant="subtitle1">
                {profileData?.firstName} {profileData?.lastName}
              </Typography>
              <Typography variant="body1">{profileData?.headline}</Typography>
              <Typography variant="body2">{profileData?.city}</Typography>
              <SimapleButton title="123 Connections" handleClick={"none"} />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <Box display="flex">
                <img src={logo} alt="image" width={35} height={35} />
                <Typography ml={1} variant="subtitle2">
                  {profileData?.experience[0]?.companyName ?? ""}
                </Typography>
              </Box>
              <Box mt={1} display="flex">
                <img src={logo} alt="image" width={35} height={35} />
                <Typography ml={1} variant="subtitle2">
                  {profileData?.education[0]?.school ?? ""}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledCardWraper>
  );
};

export default HeadlineDetails;
