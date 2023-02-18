import { Box, Button, ButtonProps, CircularProgress } from "@mui/material";
// import "./Loader.css";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
  loadingColor?: string;
  title: string;
}

function LoadingButton(props: LoadingButtonProps) {
  const {
    loading,
    loadingColor = "white",
    title,
    variant = "contained",
    size = "medium",
    color = "primary",
    ...btnProps
  } = props;

  return (
    <Button {...btnProps} color={color} size={size} variant={variant}>
      {loading ? (
        <CircularProgress size={30} sx={{ color: loadingColor }} />
      ) : (
        // <Box className="lodingButton"></Box>
        title
      )}
    </Button>
  );
}

export default LoadingButton;
