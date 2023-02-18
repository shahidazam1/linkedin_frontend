import { Box, Typography } from "@mui/material";
import EditIcon from "components/EditIcon";
import { StyledCardWraper, StyledFlex } from "styles";

const About = () => {
  return (
    <StyledCardWraper>
      <StyledFlex>
        <Typography variant="subtitle1">About</Typography>
        <EditIcon handleClickEdit={""} />
      </StyledFlex>
      <Box>
        <Typography variant="body2">
          A motivated web developer who is eager to learn new things and try to
          make an impact wherever I am.
        </Typography>
      </Box>
    </StyledCardWraper>
  );
};

export default About;
