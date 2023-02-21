import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Divider, Typography } from "@mui/material";
import { createSkill, getOneSkill, UpdateSkill } from "api/services/profile";
import AddIcon from "components/AddIcon";
import { handleError } from "components/BasicComponents";
import DialogWrapper from "components/DialogWrapper";
import EditIcon from "components/EditIcon";
import FormInput from "components/FormFields/FormInput";
import Loader from "components/Loader";
import LoadingButton from "components/LoadingButton";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { StyledCardWraper, StyledFlex } from "styles";
import { SkillDefaultValues, SkillSchema } from "validations/profile";

const Skills = ({ profileData }: any) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState();

  return (
    <StyledCardWraper>
      <StyledFlex>
        <Typography variant="subtitle1">Skills</Typography>
        <Box display="flex">
          <AddIcon handleClickAdd={() => setOpen(true)} />
        </Box>
      </StyledFlex>
      <Box>
        {profileData?.skills?.map((item: any, index: any) => (
          <>
            <StyledFlex>
              <Typography variant="subtitle2">{item?.skill}</Typography>
              <EditIcon
                handleClickEdit={() => (setOpenEdit(true), setId(item?._id))}
              />
            </StyledFlex>
            {profileData?.skills?.length != index + 1 && (
              <Divider sx={{ my: 2 }} />
            )}
          </>
        ))}
      </Box>
      <SkillDialog open={open} setOpen={setOpen} />
      <EditSkillDialog open={openEdit} setOpen={setOpenEdit} id={id} />
    </StyledCardWraper>
  );
};

export default Skills;

const SkillDialog = ({ open, setOpen }: any) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit } = useForm({
    defaultValues: SkillDefaultValues,
    mode: "onChange",
    resolver: yupResolver(SkillSchema),
  });

  const { mutate, isLoading } = useMutation(createSkill, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries("profile");
      toast.success("Education Updated");
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
            <FormInput control={control} name="skill" label="Skill" />
          </Box>
        </Box>
        <Box mt={3}>
          <LoadingButton loading={isLoading} type="submit" title="Save" />
        </Box>
      </form>
    </DialogWrapper>
  );
};

const EditSkillDialog = ({ open, setOpen, id }: any) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: SkillDefaultValues,
    mode: "onChange",
    resolver: yupResolver(SkillSchema),
  });

  const { data, isLoading: expLoading } = useQuery(["skill", id], getOneSkill);

  useEffect(() => {
    reset({ ...data?.data });
  }, [data?.data]);

  const { mutate, isLoading } = useMutation(UpdateSkill, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries("profile");
      toast.success("Skill Updated");
      setOpen(false);
    },
    onError: (err: any) => handleError(err),
  });

  const onFormSubmit = (data: any) => {
    console.log(data.skill);
    mutate({
      id: id,
      data: { skill: data?.skill },
    });
  };

  if (expLoading) return <Loader />;

  return (
    <DialogWrapper title="Skills" open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={{ height: "200px", overflow: "scroll" }}>
          <Box mt={1}>
            <FormInput control={control} name="skill" label="Skill" />
          </Box>
        </Box>
        <Box mt={3}>
          <LoadingButton loading={isLoading} type="submit" title="Save" />
        </Box>
      </form>
    </DialogWrapper>
  );
};
