import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MySnackbarContent from "./MySnackbarContent";
import { Portal } from "@material-ui/core";

export default class Message extends React.Component {

    render() {
        return (
            <div>
            {this.props.visibility ? <Portal children={this.container}>
                
                <Snackbar
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    open={this.props.visibility}
                    onClose={this.props.onCloseFunc}
                    ContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                    autoHideDuration={6000}
                >
                    <MySnackbarContent
                        onClose={this.props.onCloseFunc}
                        variant={this.props.variant}
                        message={this.props.message}
                    />
                </Snackbar>
                
            </Portal> : null
            }
                <div
                    ref={ref => {
                        this.container = ref;
                    }}
                />
            </div>
            
        );
    }
}