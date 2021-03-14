import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface ErrorDialogViewProps {
  errorMessage: string;
  openDialog: boolean;
  handleClose: () => void;
}

export const ErrorDialogView: React.FC<ErrorDialogViewProps> = (ErrorDialogViewProps) => {
  return (
    <div>
      <Dialog
        open={ErrorDialogViewProps.openDialog}
        onClose={ErrorDialogViewProps.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {ErrorDialogViewProps.errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ErrorDialogViewProps.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
