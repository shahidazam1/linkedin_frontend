import { Typography, Box } from "@mui/material";

interface type {
  title: string;
  handleClick: any;
}

const SimapleButton = ({ title, handleClick }: type) => {
  return (
    <Box>
      <Typography
        color="primary"
        variant="h6"
        sx={{
          cursor: "pointer",
          "&:hover": { textDecoration: "underline" },
          fontWeight: 600,
        }}
        onClick={handleClick}
        component="span"
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SimapleButton;
