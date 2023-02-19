import { StyledCardWraper, StyledFlex } from "styles";
import { Box, Typography } from "@mui/material";
import AddIcon from "components/AddIcon";
import { handleError } from "components/BasicComponents";
import DialogWrapper from "components/DialogWrapper";
import EditIcon from "components/EditIcon";
import FormInput from "components/FormFields/FormInput";
import LoadingButton from "components/LoadingButton";
import SimapleButton from "components/SimapleButton";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { HeadlineDefaultValues, HeadlineSchema } from "validations/profile";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateProfile } from "api/services/profile";

const Skills = ({ profileData }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledCardWraper>
      <StyledFlex>
        <Typography variant="subtitle1">Skills</Typography>
        <Box display="flex">
          <AddIcon handleClickAdd={""} />
          <EditIcon handleClickEdit={""} />
        </Box>
      </StyledFlex>
      <Box>
        <Typography variant="subtitle2">Redux.js</Typography>
      </Box>
      <HeadlineDialog open={open} setOpen={setOpen} profileData={profileData} />
    </StyledCardWraper>
  );
};

export default Skills;

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
    mutate(data);
  };

  return (
    <DialogWrapper title="Edit" open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={{ height: "200px", overflow: "scroll" }}>
          <Box>
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
