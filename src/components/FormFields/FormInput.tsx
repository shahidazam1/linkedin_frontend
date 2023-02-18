import { TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
  label?: string;
  name: string;
  size?: "small" | "medium";
  control: any;
  multiline?: boolean;
  required?: boolean;
}

function FormInput(props: Props) {
  const {
    name,
    size = "small",
    control,
    label = "",
    multiline,
    required = false,
  } = props;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
              error={Boolean(error)}
              variant="outlined"
              label={`${label} ${required ? "*" : ""}`}
              fullWidth
              multiline={multiline}
              rows={multiline ? 2 : 1}
              size={size}
              {...field}
            />
            {error && (
              <Typography
                variant="caption"
                sx={{ pl: "2px", display: "block" }}
                color="rgb(211, 47, 47)"
              >
                {error.message}
              </Typography>
            )}
          </>
        )}
      />
    </>
  );
}

export default FormInput;



// const { control, handleSubmit } = useForm({
//   defaultValues: CreateProductDefaultValues,
//   mode: "onChange",
//   resolver: yupResolver(CreateProductSchema),
// });
// const onFormSubmit = (data: any) => {
//   mutate(data);
// };

// <Box mt={3} maxWidth="500px">
//             <FormInput control={control} name="name" label="Rule Name" />
//           </Box>
//           <Box mt={3} maxWidth="700px">
//             <FormInput
//               control={control}
//               multiline
//               name="description"
//               label="Description"
//             />
//           </Box>
//           <Box mt={3}>
//             <Grid container spacing={3}>
//               <Grid item xs={4}>
//                 <FormSelect
//                   control={control}
//                   name="ruleType"
//                   label="Rule Type"
//                   options={ruleType?.map((item: any) => ({
//                     label: item?.label,
//                     value: item?.value,
//                   }))}
//                 />
//               </Grid>
