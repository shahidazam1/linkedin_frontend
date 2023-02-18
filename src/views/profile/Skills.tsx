import { StyledCardWraper, StyledFlex } from "styles";
import { Box, Typography } from "@mui/material";
import AddIcon from "components/AddIcon";
import EditIcon from "components/EditIcon";

const Skills = () => {
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
    </StyledCardWraper>
  );
};

export default Skills;
