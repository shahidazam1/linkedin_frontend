import { Box, Grid } from "@mui/material";
import InvitationView from "views/myNetwork/Invitations";

const invitations = () => {
  const acceptAction = () => {};

  const rejectAction = () => {};
  return (
    <Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={0} sm={0} md={2}></Grid>
          <Grid item xs={12} sm={9} md={7}>
            <InvitationView
              acceptAction={acceptAction}
              rejectAction={rejectAction}
              name="shahd"
              headline=": "
            />
          </Grid>
          <Grid item xs={0} sm={3} md={3}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default invitations;
