import { Box, Divider, Typography } from "@mui/material";
import AddIcon from "components/AddIcon";
import { LogoDescDetails } from "components/BasicComponents";
import EditIcon from "components/EditIcon";
import { useState } from "react";
import { StyledCardWraper, StyledFlex } from "styles";
import { handleError } from "components/BasicComponents";
import DialogWrapper from "components/DialogWrapper";
import FormInput from "components/FormFields/FormInput";
import LoadingButton from "components/LoadingButton";
import SimapleButton from "components/SimapleButton";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { ExperienceDefaultValues, ExperienceSchema } from "validations/profile";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createExperience,
  getOneExperience,
  UpdateExperience,
} from "api/services/profile";
import FormSelect from "components/FormFields/FormSelect";
import { experienceType } from "utils";
import FormDate from "components/FormFields/FormDate";
import moment from "moment";
import Loader from "components/Loader";

const Experience = ({ profileData }: any) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState("");

  return (
    <StyledCardWraper>
      <StyledFlex>
        <Typography variant="subtitle1">Experience</Typography>
        <Box display="flex">
          <AddIcon handleClickAdd={() => setOpen(true)} />
        </Box>
      </StyledFlex>
      <Box mt={2}>
        {profileData?.experience?.map((item: any, index: any) => (
          <>
            <LogoDescDetails
              key={index}
              title={item?.title}
              desc={`${item?.companyName}.${item?.type}`}
              duration={`${moment(item?.startDate).format("MMM YYYY")}-${moment(
                item?.endDate
              ).format("MMM YYYY")}`}
              extraInfo={item?.location}
              handleClickEdit={() => (setOpenEdit(true), setId(item?._id))}
            />
            {profileData?.experience?.length != index + 1 && (
              <Divider sx={{ my: 2 }} />
            )}
          </>
        ))}
      </Box>
      <AddExperienceDialog open={open} setOpen={setOpen} />
      <EditExperienceDialog
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        id={id}
      />
    </StyledCardWraper>
  );
};

export default Experience;

const AddExperienceDialog = ({ open, setOpen }: any) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit } = useForm({
    defaultValues: ExperienceDefaultValues,
    mode: "onChange",
    resolver: yupResolver(ExperienceSchema),
  });

  const { mutate, isLoading } = useMutation(createExperience, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries("profile");
      toast.success("Experience Added");
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
          <Box mt={1}>
            <FormInput control={control} name="title" label="Title" />
          </Box>
          <Box mt={2}>
            <FormSelect
              options={experienceType.map((i) => {
                return { label: i, value: i };
              })}
              control={control}
              name="type"
              label="Type"
            />
          </Box>
          <Box mt={2}>
            <FormInput
              control={control}
              name="companyName"
              label="Company Name"
            />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="location" label="Location" />
          </Box>
          <Box mt={2}>
            <FormDate control={control} name="startDate" label="Start Date" />
          </Box>
          <Box mt={2}>
            <FormDate control={control} name="endDate" label="End Date" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="industry" label="Industry" />
          </Box>
        </Box>
        <Box mt={3}>
          <LoadingButton loading={isLoading} type="submit" title="Save" />
        </Box>
      </form>
    </DialogWrapper>
  );
};

const EditExperienceDialog = ({ openEdit, setOpenEdit, id }: any) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: ExperienceDefaultValues,
    mode: "onChange",
    resolver: yupResolver(ExperienceSchema),
  });

  const { data, isLoading: expLoading } = useQuery(
    ["experience", id],
    getOneExperience
  );

  useEffect(() => {
    reset({ ...data?.data });
  }, [data?.data]);

  const { mutate, isLoading } = useMutation(UpdateExperience, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries("profile");
      toast.success("Experience Updated");
      setOpenEdit(false);
    },
    onError: (err: any) => handleError(err),
  });

  const onFormSubmit = (data: any) => {
    mutate({
      id: id,
      data: data,
    });
  };

  if (expLoading) return <Loader />;

  return (
    <DialogWrapper title="Edit" open={openEdit} setOpen={setOpenEdit}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={{ height: "200px", overflow: "scroll" }}>
          <Box mt={1}>
            <FormInput control={control} name="title" label="Title" />
          </Box>
          <Box mt={2}>
            <FormSelect
              options={experienceType.map((i) => {
                return { label: i, value: i };
              })}
              control={control}
              name="type"
              label="Type"
            />
          </Box>
          <Box mt={2}>
            <FormInput
              control={control}
              name="companyName"
              label="Company Name"
            />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="location" label="Location" />
          </Box>
          <Box mt={2}>
            <FormDate control={control} name="startDate" label="Start Date" />
          </Box>
          <Box mt={2}>
            <FormDate control={control} name="endDate" label="End Date" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="industry" label="Industry" />
          </Box>
        </Box>
        <Box mt={3}>
          <LoadingButton loading={isLoading} type="submit" title="Save" />
        </Box>
      </form>
    </DialogWrapper>
  );
};
