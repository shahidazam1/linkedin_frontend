import { Box, Typography } from "@mui/material";
import AddIcon from "components/AddIcon";
import { LogoDescDetails } from "components/BasicComponents";
import EditIcon from "components/EditIcon";
import { StyledCardWraper, StyledFlex } from "styles";

const Education = () => {
  return (
    <StyledCardWraper>
      <StyledFlex>
        <Typography variant="subtitle1">Education</Typography>
        <Box display="flex">
          <AddIcon handleClickAdd={""} />
          <EditIcon handleClickEdit={""} />
        </Box>
      </StyledFlex>
      <Box mt={2}>
        <LogoDescDetails
          title="title"
          desc="desc"
          duration="duration"
          extraInfo="extra"
        />
      </Box>
    </StyledCardWraper>
  );
};

export default Education;
