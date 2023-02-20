import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Divider, Typography } from "@mui/material";
import {
  createEducation,
  getOneEducation,
  UpdateEducation,
} from "api/services/profile";
import AddIcon from "components/AddIcon";
import { handleError, LogoDescDetails } from "components/BasicComponents";
import DialogWrapper from "components/DialogWrapper";
import FormDate from "components/FormFields/FormDate";
import FormInput from "components/FormFields/FormInput";
import Loader from "components/Loader";
import LoadingButton from "components/LoadingButton";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { StyledCardWraper, StyledFlex } from "styles";
import { EduDefaultValues, EduSchema } from "validations/profile";

const Education = ({ profileData }: any) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState("");

  return (
    <StyledCardWraper>
      <StyledFlex>
        <Typography variant="subtitle1">Education</Typography>
        <Box display="flex">
          <AddIcon handleClickAdd={() => setOpen(true)} />
        </Box>
      </StyledFlex>
      <Box mt={2}>
        {profileData?.education?.map((item: any, index: any) => (
          <>
            <LogoDescDetails
              key={index}
              title={item?.school}
              desc={`${item?.degree}, ${item?.field}`}
              duration={`${moment(item?.startDate).format("MMM YYYY")}-${moment(
                item?.endDate
              ).format("MMM YYYY")}`}
              extraInfo={`Grade : ${item?.grade}`}
              handleClickEdit={() => (setOpenEdit(true), setId(item?._id))}
            />
            {profileData?.experience?.length != index + 1 && (
              <Divider sx={{ my: 2 }} />
            )}
          </>
        ))}
      </Box>
      <AddEduDialog open={open} setOpen={setOpen} />
      <EditEduDialog open={openEdit} setOpen={setOpenEdit} id={id} />
    </StyledCardWraper>
  );
};

export default Education;

const AddEduDialog = ({ open, setOpen }: any) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit } = useForm({
    defaultValues: EduDefaultValues,
    mode: "onChange",
    resolver: yupResolver(EduSchema),
  });

  const { mutate, isLoading } = useMutation(createEducation, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries("profile");
      toast.success("Education Added");
      setOpen(false);
    },
    onError: (err: any) => handleError(err),
  });

  const onFormSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <DialogWrapper title="Education" open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={{ height: "200px", overflow: "scroll" }}>
          <Box mt={1}>
            <FormInput control={control} name="school" label="School" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="field" label="Field" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="degree" label="Degree" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="grade" label="Grade" />
          </Box>
          <Box mt={2}>
            <FormDate control={control} name="startDate" label="Start Date" />
          </Box>
          <Box mt={2}>
            <FormDate control={control} name="endDate" label="End Date" />
          </Box>
        </Box>
        <Box mt={3}>
          <LoadingButton loading={isLoading} type="submit" title="Save" />
        </Box>
      </form>
    </DialogWrapper>
  );
};

const EditEduDialog = ({ open, setOpen, id }: any) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: EduDefaultValues,
    mode: "onChange",
    resolver: yupResolver(EduSchema),
  });

  const { data, isLoading: expLoading } = useQuery(
    ["experience", id],
    getOneEducation
  );

  useEffect(() => {
    reset({ ...data?.data });
  }, [data?.data]);

  const { mutate, isLoading } = useMutation(UpdateEducation, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries("profile");
      toast.success("Education Updated");
      setOpen(false);
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
    <DialogWrapper title="Education" open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={{ height: "200px", overflow: "scroll" }}>
          <Box mt={1}>
            <FormInput control={control} name="school" label="School" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="field" label="Field" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="degree" label="Degree" />
          </Box>
          <Box mt={2}>
            <FormInput control={control} name="grade" label="Grade" />
          </Box>
          <Box mt={2}>
            <FormDate control={control} name="startDate" label="Start Date" />
          </Box>
          <Box mt={2}>
            <FormDate control={control} name="endDate" label="End Date" />
          </Box>
        </Box>
        <Box mt={3}>
          <LoadingButton loading={isLoading} type="submit" title="Save" />
        </Box>
      </form>
    </DialogWrapper>
  );
};
