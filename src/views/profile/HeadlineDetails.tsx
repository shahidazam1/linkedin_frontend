import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { UpdateProfile } from "api/services/profile";
import { logo, shahid } from "assets";
import { handleError } from "components/BasicComponents";
import DialogWrapper from "components/DialogWrapper";
import EditIcon from "components/EditIcon";
import FormInput from "components/FormFields/FormInput";
import LoadingButton from "components/LoadingButton";
import SimapleButton from "components/SimapleButton";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledCardWraper } from "styles";
import { HeadlineDefaultValues, HeadlineSchema } from "validations/profile";

const HeadlineDetails = ({ profileData }: any) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
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
        <EditIcon handleClickEdit={() => setOpen(true)} />
        <Grid mt={3} container spacing={2}>
          <Grid item xs={7}>
            <Box>
              <Typography variant="subtitle1">
                {profileData?.firstName} {profileData?.lastName}
              </Typography>
              <Typography variant="body1">{profileData?.headline}</Typography>
              <Typography variant="body2">{profileData?.city}</Typography>
              <SimapleButton
                title="123 Connections"
                handleClick={() => navigate("/connections")}
              />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>
              {profileData?.experience[0]?.companyName && (
                <Box display="flex">
                  <img src={logo} alt="image" width={35} height={35} />
                  <Typography ml={1} variant="subtitle2">
                    {profileData?.experience[0]?.companyName ?? ""}
                  </Typography>
                </Box>
              )}
              {profileData?.education[0]?.school && (
                <Box mt={1} display="flex">
                  <img src={logo} alt="image" width={35} height={35} />
                  <Typography ml={1} variant="subtitle2">
                    {profileData?.education[0]?.school ?? ""}
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <HeadlineDialog open={open} setOpen={setOpen} profileData={profileData} />
    </StyledCardWraper>
  );
};

export default HeadlineDetails;

const HeadlineDialog = ({ open, setOpen, profileData }: any) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: HeadlineDefaultValues,
    mode: "onChange",
    resolver: yupResolver(HeadlineSchema),
  });

  useEffect(() => {
    reset({
      firstName: profileData?.firstName,
      lastName: profileData?.lastName,
      city: profileData?.city,
      headline: profileData?.headline,
    });
  }, [profileData]);

  const { mutate, isLoading } = useMutation(UpdateProfile, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries("profile");
      toast.success("Profile Updated");
      setOpen(false);
    },
    onError: (err: any) => handleError(err),
  });

  const onFormSubmit = (data: any) => {
    mutate({
      data: { ...data, about: profileData?.about },
      id: profileData?._id,
    });
  };

  return (
    <DialogWrapper title="Edit" open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={{ height: "200px", overflow: "scroll" }}>
          <Box mt={2}>
            <FormInput control={control} name="firstName" label="First Name" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="lastName" label="Last Name" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="city" label="Address" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="headline" label="Headline" />
          </Box>
        </Box>
        <Box mt={3}>
          <LoadingButton loading={isLoading} type="submit" title="Save" />
        </Box>
      </form>
    </DialogWrapper>
  );
};
