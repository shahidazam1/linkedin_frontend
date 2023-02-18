import { Box, Button, Dialog, Typography } from "@mui/material";

interface IDrawerWrapperProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  width?: "xs" | "sm" | "md" | "lg" | "xl";
}

function DialogWrapper(props: IDrawerWrapperProps) {
  const { open, setOpen, title, children, width = "sm" } = props;

  return (
    <Dialog
      maxWidth={width}
      fullWidth
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box
        sx={{
          display: "flex",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          p: "0.8rem 1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontSize="18px">
          {title}
        </Typography>
        <Button
          onClick={() => setOpen(false)}
          sx={{ color: "black", opacity: "0.5" }}
        >
          Cancel
        </Button>
      </Box>
      <Box p={2}>{children}</Box>
    </Dialog>
  );
}

export default DialogWrapper;
