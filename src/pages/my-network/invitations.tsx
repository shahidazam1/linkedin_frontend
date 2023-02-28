import { Box, Grid } from "@mui/material";
import { addConnection, getAllInvitations } from "api/services/connections";
import { handleError } from "components/BasicComponents";
import Loader from "components/Loader";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import InvitationView from "views/myNetwork/Invitations";

const invitations = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("invitations", getAllInvitations);

  const { mutate, isLoading: connectLoading } = useMutation(addConnection, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries("invitations");
      toast.success(res?.data?.message);
    },
    onError: (err: any) => handleError(err),
  });

  const acceptAction = (id: any) => {
    mutate({
      profileId: id,
      status: "Accepted",
    });
  };

  const rejectAction = () => {};

  if (isLoading || connectLoading) return <Loader />;
  return (
    <Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={0} sm={0} md={2}></Grid>
          <Grid item xs={12} sm={9} md={7}>
            {data?.data?.map((item: any, index: any) => (
              <InvitationView
                acceptAction={() => acceptAction(item?._id)}
                rejectAction={rejectAction}
                name={`${item?.profile?.firstName} ${item?.profile?.lastName}`}
                headline={item?.profile?.headline}
              />
            ))}
          </Grid>
          <Grid item xs={0} sm={3} md={3}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default invitations;
