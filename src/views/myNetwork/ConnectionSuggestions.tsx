import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { shahid } from "assets";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import { addConnection, getAllPeople } from "api/services/connections";
import SimpleLoader from "components/SimpleLoader";
import { toast } from "react-toastify";
import { handleError } from "components/BasicComponents";

const ConnectionSuggestions = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("findPeople", getAllPeople);

  const { mutate, isLoading: connectLoading } = useMutation(addConnection, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries("profile");
      toast.success("Invitation Sent");
    },
    onError: (err: any) => handleError(err),
  });

  const handleClickConnect = (id: any) => {
    mutate({
      connectionProfileId: id,
      status: "Pending",
    });
  };

  if (isLoading) return <SimpleLoader />;
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {data?.data?.map((item: any, index: any) => (
          <Grid key={index} item xs={6} md={4}>
            <SuggesstionsCard
              name={`${item?.firstName} ${item?.lastName}`}
              city={item?.city}
              headline={item?.headline}
              handleClickConnect={() => handleClickConnect(item?._id)}
              connectLoading={connectLoading}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ConnectionSuggestions;

interface Types {
  name: string;
  city: string;
  headline: string;
  handleClickConnect: any;
  connectLoading: Boolean;
}

const SuggesstionsCard = ({
  name,
  headline,
  city,
  handleClickConnect,
  connectLoading = false,
}: Types) => {
  return (
    <Box
      sx={{ border: "1px solid #DCDCDC", borderRadius: "10px", width: "100%" }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        <img
          src={shahid}
          alt=""
          height="70px"
          width="100%"
          style={{ borderRadius: "10px 10px 0px 0px" }}
        />
        <Box sx={{ position: "absolute", left: "23%", top: 20 }}>
          <Avatar src={shahid} alt="shaid" sx={{ width: 100, height: 100 }} />
        </Box>
      </Box>
      <Box p={1} mt={6} sx={{ textAlign: "center" }}>
        <Typography variant="subtitle2">{name}</Typography>
        <Typography variant="body2">{headline}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          {city}
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<PersonAddAlt1Icon fontSize="small" />}
            onClick={handleClickConnect}
          >
            Connect
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
