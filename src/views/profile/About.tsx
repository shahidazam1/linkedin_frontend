import { Box, Typography } from "@mui/material";
import { UpdateProfile } from "api/services/profile";
import { handleError } from "components/BasicComponents";
import DialogWrapper from "components/DialogWrapper";
import EditIcon from "components/EditIcon";
import FormInput from "components/FormFields/FormInput";
import LoadingButton from "components/LoadingButton";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { StyledCardWraper, StyledFlex } from "styles";

const About = ({ profileData }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledCardWraper>
      <StyledFlex>
        <Typography variant="subtitle1">About</Typography>
        <EditIcon handleClickEdit={() => setOpen(true)} />
      </StyledFlex>
      <Box>
        <Typography variant="body2">{profileData?.about ?? ""}</Typography>
      </Box>
      <AboutDialog open={open} setOpen={setOpen} profileData={profileData} />
    </StyledCardWraper>
  );
};

export default About;

const AboutDialog = ({ open, setOpen, profileData }: any) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset({
      about: profileData?.about,
    });
  }, [profileData]);

  const { mutate, isLoading } = useMutation(UpdateProfile, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries("profile");
      toast.success("About Added");
      setOpen(false);
    },
    onError: (err: any) => handleError(err),
  });

  const onFormSubmit = (data: any) => {
    mutate({
      data: {
        about: data.about,
        firstName: profileData?.firstName,
        lastName: profileData?.lastName,
        city: profileData?.city,
        headline: profileData?.headline,
      },
      id: profileData?._id,
    });
  };

  return (
    <DialogWrapper title="About " open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={{ height: "200px", overflow: "scroll" }}>
          <Box mt={2}>
            <FormInput multiline control={control} name="about" label="About" />
          </Box>
        </Box>
        <Box mt={3}>
          <LoadingButton loading={isLoading} type="submit" title="Save" />
        </Box>
      </form>
    </DialogWrapper>
  );
};
