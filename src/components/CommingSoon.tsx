import { Box, Typography } from "@mui/material";

const CommingSoon = ({ title }: any) => {
  return (
    <Box
      sx={{ height: "80vh" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" sx={{ color: "grey" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default CommingSoon;
