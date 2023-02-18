import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import OrComponent, { handleError, LogoText } from "components/BasicComponents";
import LoadingButton from "components/LoadingButton";
import { useNavigate } from "react-router-dom";
import FormInput from "components/FormFields/FormInput";
import { useForm } from "react-hook-form";
import { SignupDefaultValues, SignupSchema } from "validations/signup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { signup } from "api/services/signup";

const Signup = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: SignupDefaultValues,
    mode: "onChange",
    resolver: yupResolver(SignupSchema),
  });

  const { mutate, isLoading } = useMutation(signup, {
    onSuccess: (res: any) => {
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    },
    onError: (err: any) => handleError(err),
  });

  const onFormSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Box maxWidth={1600}>
        <LogoText />
        <Box my={4} textAlign="center">
          <Typography variant="h3">
            Make the most of your professional life
          </Typography>
        </Box>
        <Box
          p={4}
          maxWidth={500}
          sx={{
            backgroundColor: "white",
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <Box>
              <FormInput control={control} name="name" label="Name" />
            </Box>
            <Box mt={3}>
              <FormInput control={control} name="email" label="Email" />
            </Box>
            <Box mt={3}>
              <FormInput control={control} name="password" label="Password" />
            </Box>
            <Box mt={3}>
              <FormInput
                control={control}
                name="confirmPassword"
                label="Confirm Password"
              />
            </Box>
            <Box mt={2}>
              <Typography textAlign="center" variant="body2">
                By clicking Agree & Join, you agree to the LinkedIn User
                Agreement, Privacy Policy, and Cookie Policy.
              </Typography>
            </Box>
            <Box mt={3}>
              <LoadingButton
                loading={isLoading}
                type="submit"
                fullWidth
                variant="contained"
                title="Agree & Join"
              />
            </Box>
          </form>
          <OrComponent />
          <Typography textAlign="center" variant="body1">
            Already on LinkedIn
            <Button onClick={() => navigate("/signin")}>Signin</Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
