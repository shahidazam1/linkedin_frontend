import { Box, Typography, Avatar } from "@mui/material";
import { logo } from "assets";
import { StyledAddPost, StyledCardWraper, StyledFlexCenter } from "styles";

const AddPost = () => {
  return (
    <StyledCardWraper>
      <StyledFlexCenter>
        <Box mr={2}>
          <Avatar src={logo} alt="" sx={{ width: 50, height: 50 }} />
        </Box>
        <StyledAddPost>
          <Typography variant="body1">Start a Post</Typography>
        </StyledAddPost>
      </StyledFlexCenter>
    </StyledCardWraper>
  );
};

export default AddPost;
