import { Box, IconButton } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const AddIcon = ({ handleClickAdd }: any) => {
  return (
    <Box textAlign="end">
      <IconButton onClick={handleClickAdd}>
        <AddOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default AddIcon;
