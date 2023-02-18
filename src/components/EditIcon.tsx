import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Box, IconButton } from "@mui/material";

const EditIcon = ({ handleClickEdit }: any) => {
  return (
    <Box textAlign="end">
      <IconButton onClick={handleClickEdit}>
        <ModeEditOutlineOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default EditIcon;
