import React from "react";
import { Snackbar, Portal } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type ToastAlertProps = {
  text: string;
  severity: "success" | "error" | "warning" | "info";
  onExited?: () => void;
};

function ToastAlert(props: ToastAlertProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Portal>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onExited={props.onExited}
      >
        <Alert onClose={handleClose} severity={props.severity}>
          {props.text}
        </Alert>
      </Snackbar>
    </Portal>
  );
}

export default ToastAlert;
