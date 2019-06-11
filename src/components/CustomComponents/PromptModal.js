import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class PromptModal extends React.Component {
    state = {
        showPromptModal: false,
    };

    handleClickOpen = (value) => {
        this.setState({ showPromptModal: value });
    };

    handleClose = () => {
        this.setState({ showPromptModal: false });
    };

    render() {
        const {message, title, PositiveText, NegativeText, show} = this.props;

        return (
            <div>
                <Dialog
                    open={show}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.props.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{textAlign: 'right'}}>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleNo} color="primary">
                            {NegativeText}
                        </Button>
                        <Button onClick={this.props.handleYes} color="primary">
                            {PositiveText}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
//
// PromptModal.propTypes = {
//     classes: PropTypes.object.isRequired,
//     className: PropTypes.string,
//     message: PropTypes.node,
//     onClose: PropTypes.func,
//     variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
// };

export default PromptModal;
