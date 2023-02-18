import {
  StyledCardWraper,
  StyledFlex,
  StyledFlexCenter,
  StyledFlexCenterAll,
} from "styles";
import { Box, Typography, Avatar, Divider, Grid } from "@mui/material";
import { logo, shahid } from "assets";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { LikeCommentCard } from "components/BasicComponents";

const HomeFeed = () => {
  return (
    <>
      <StyledCardWraper>
        <Box display="flex">
          <Avatar src={logo} alt="" sx={{ width: 50, height: 50 }} />
          <Box ml={1}>
            <StyledFlexCenter>
              <Typography variant="subtitle2">Shahid azam</Typography>
              <Typography variant="subtitle2">.</Typography>
              <Typography variant="caption">1st</Typography>
            </StyledFlexCenter>
            <Typography variant="caption" component="div">
              Web developer
            </Typography>
            <Typography variant="caption">2h</Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="body2">
            A perfect example of true humanity!! There is nothing beyond this.
            The greatness of a man is not determined by his status, but by his
            humanity. It's my humble request, Don't show off your humanity in
            words but show it in your action..
          </Typography>
          <Box>
            <img src={shahid} alt="" style={{ width: "100%" }} />
          </Box>
        </Box>
        <Box mt={1}>
          <StyledFlex>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              23 likes
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              10 comments
            </Typography>
          </StyledFlex>
          <Divider sx={{ mt: 1 }} />
          <Box mt={2}>
            <Grid container spacing={2}>
              <LikeCommentCard
                icon={
                  <ThumbUpOutlinedIcon fontSize="small" color="secondary" />
                }
                title="Like"
              />
              <LikeCommentCard
                icon={
                  <MessageOutlinedIcon fontSize="small" color="secondary" />
                }
                title="Comment"
              />
              <LikeCommentCard
                icon={<RepeatOutlinedIcon fontSize="small" color="secondary" />}
                title="Repost"
              />
              <LikeCommentCard
                icon={<SendOutlinedIcon fontSize="small" color="secondary" />}
                title="Send"
              />
            </Grid>
          </Box>
        </Box>
      </StyledCardWraper>
      <StyledCardWraper>
        <Box display="flex">
          <Avatar src={logo} alt="" sx={{ width: 50, height: 50 }} />
          <Box ml={1}>
            <StyledFlexCenter>
              <Typography variant="subtitle2">Shahid azam</Typography>
              <Typography variant="subtitle2">.</Typography>
              <Typography variant="caption">1st</Typography>
            </StyledFlexCenter>
            <Typography variant="caption" component="div">
              Web developer
            </Typography>
            <Typography variant="caption">2h</Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="body2">
            A perfect example of true humanity!! There is nothing beyond this.
            The greatness of a man is not determined by his status, but by his
            humanity. It's my humble request, Don't show off your humanity in
            words but show it in your action..
          </Typography>
          <Box>
            {/* <video src="./video.mp4" style={{ width: "100%" }} /> */}
            <video controls autoPlay loop style={{ width: "100%" }}>
              <source src="./video.mp4" type="video/mp4" />
            </video>
          </Box>
          <Box mt={1}>
            <StyledFlex>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                23 likes
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                10 comments
              </Typography>
            </StyledFlex>
            <Divider sx={{ mt: 1 }} />
            <Box mt={2}>
              <Grid container spacing={2}>
                <LikeCommentCard
                  icon={
                    <ThumbUpOutlinedIcon fontSize="small" color="secondary" />
                  }
                  title="Like"
                />
                <LikeCommentCard
                  icon={
                    <MessageOutlinedIcon fontSize="small" color="secondary" />
                  }
                  title="Comment"
                />
                <LikeCommentCard
                  icon={
                    <RepeatOutlinedIcon fontSize="small" color="secondary" />
                  }
                  title="Repost"
                />
                <LikeCommentCard
                  icon={<SendOutlinedIcon fontSize="small" color="secondary" />}
                  title="Send"
                />
              </Grid>
            </Box>
          </Box>
        </Box>
      </StyledCardWraper>
    </>
  );
};

export default HomeFeed;
