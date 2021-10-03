import React from 'react';
import TextField from '@material-ui/core/TextField';
import MuiDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/styles';

const Dialog = withStyles({
    root: {
        padding: '1rem',
    },
    paper: {
        backgroundColor: '#191C24',
    }
})(MuiDialog);


export default function CreateShowtime({ open, handleDialogOpen }) {
    return (
        <div className="bg-gray-500">
           
            <Dialog open={open} onClose={handleDialogOpen} maxWidth={'lg'} >
                {/* <DialogTitle></DialogTitle> */}
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        style={{ width: '50%' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <button onClick={handleDialogOpen}>Cancel</button>
                    <button onClick={handleDialogOpen}>Subscribe</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}