import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { logo } from "assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledFlex, StyledFlexCenterAll } from "styles";
import { JsxElement } from "typescript";
import EditIcon from "./EditIcon";

interface propTypes {
  title: string;
  desc: string;
  duration: string;
  extraInfo?: string;
  handleClickEdit?: any;
}

interface liceCommentType {
  title: string;
  icon: any;
}
const OrComponent = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={2} display="flex" alignItems="center">
        <Grid item xs={5.5}>
          <Divider />
        </Grid>
        <Grid item xs={1}>
          <Typography p={1} variant="body1">
            or
          </Typography>
        </Grid>
        <Grid item xs={5.5}>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrComponent;

export const LogoText = () => {
  return (
    <Box display="flex">
      <Typography variant="h3" sx={{ color: "#0A66C2" }}>
        Linked
      </Typography>
      <Box pl={0.1}>
        <img src={logo} alt="Linked" width={36} />
      </Box>
    </Box>
  );
};

export const HeaderIcons = ({ icon, name, isActive, path }: any) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        ml: 4,
        borderBottom: isActive ? "3px solid blue" : "none",
        "@media (max-width: 650px)": {
          ml: 2,
          borderBottom: "none",
        },
      }}
      textAlign="center"
      onClick={() => navigate(`${path}`)}
    >
      <IconButton color={isActive ? "primary" : "default"}>{icon}</IconButton>
      <Typography
        sx={{
          "@media (max-width: 650px)": {
            display: "none",
          },
        }}
        variant="body2"
      >
        {name}
      </Typography>
    </Box>
  );
};

export const LogoDescDetails = ({
  title,
  desc,
  duration,
  extraInfo,
  handleClickEdit,
}: propTypes) => {
  return (
    <StyledFlex>
      <Box display="flex">
        <Box>
          <img src={logo} alt="" width={35} height={35} />
        </Box>
        <Box ml={2}>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="body1">{desc}</Typography>
          <Typography variant="body2">{duration}</Typography>
          <Typography variant="body2">{extraInfo}</Typography>
        </Box>
      </Box>
      <Box alignSelf="flex-start">
        <EditIcon handleClickEdit={handleClickEdit} />
      </Box>
    </StyledFlex>
  );
};

export const LikeCommentCard = ({ icon, title }: liceCommentType) => {
  return (
    <Grid item xs={3}>
      <StyledFlexCenterAll>
        {icon}
        <Typography variant="body1" sx={{ opacity: 0.8, ml: 0.3 }}>
          {title}
        </Typography>
      </StyledFlexCenterAll>
    </Grid>
  );
};

export const handleError = (err: any) => {
  if (Array.isArray(err?.response?.data?.message)) {
    toast.error(err?.response?.data?.message[0]);
  } else {
    toast.error(err?.response?.data?.message);
  }
};
