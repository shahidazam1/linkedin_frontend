import { styled, Typography, Box } from "@mui/material";

export const StyledHeader = styled(Box)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 12,
  background: "#FFFFFF",
  width: "100%",
  padding: 20,
}));

export const StyledAvatar = styled(Box)(() => ({
  "@media (max-width : 650px)": { display: "none" },
  marginLeft: 30,
  textAlign: "center",
}));

export const StyledCardWraper = styled(Box)(() => ({
  backgroundColor: "white",
  borderRadius: "10px",
  border: "1px solid #DCDCDC	",
  padding: 20,
  marginTop: 20,
}));

export const StyledFlex = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StyledFlexCenterAll = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledAddPost = styled(Box)(() => ({
  border: "1px solid #DCDCDC",
  backgroundColor: "#E0E0E0",
  borderRadius: "15px",
  padding: 15,
  opacity: 0.5,
  width: "100%",
}));

export const StyledFlexCenter = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));
export const StyledHeader6 = styled(Box)(() => ({}));
export const StyledHeader7 = styled(Box)(() => ({}));
export const StyledHeader8 = styled(Box)(() => ({}));
export const StyledHeader9 = styled(Box)(() => ({}));
export const StyledHeader59 = styled(Box)(() => ({}));

export const StyledProfileNav = styled("div")(() => ({
  display: "flex",
  position: "sticky",
  top: 0,
  width: "100%",
  zIndex: 5,
}));

export const StyledProfileNavItem = styled(Typography)<{ active: number }>(
  ({ active }) => ({
    padding: "12px 20px",
    fontFamily: "poppins_semibold",
    fontSize: "13px",
    position: "relative",
    marginRight: "15px",
    border: "1px solid #2B2D2229",
    borderRadius: "5px 5px 0px 0px",
    background: "white",
    color: active ? "#2B2D22" : "rgba(0,0,0,0.5)",
    cursor: "pointer",
    ...(active && {
      "&:before": {
        position: "absolute",
        content: "''",
        bottom: 0,
        width: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        height: 3,
        backgroundColor: "#FF4F3D",
      },
    }),
  })
);
