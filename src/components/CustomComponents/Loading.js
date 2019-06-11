import React, {Component} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from '@material-ui/core/Typography';
import Zoom from "@material-ui/core/Zoom";
import Portal from '@material-ui/core/Portal';

const styles = theme => ({
    progress: {
        margin: '0 auto',
        width: '100',
        textAlign: 'center',

    },
    card: {
        minWidth: 275,
        marginTop: -50,
        marginLeft: -130,
        position: 'fixed',
        backgroundColor: '#d3d3d3',
        left: '50%',
        top: '50%',
        zIndex: 2000
    },
});

class Loading extends Component {

    render() {
        const {classes, loading} = this.props;

        return (
            <div>
            {loading ? <Portal children={this.container}>
                
                <Zoom in={true}>
                    <Card className={classes.card}>
                        <CardContent style={{textAlign: 'center'}}>
                            <CircularProgress className={classes.progress} color="secondary" thickness={5}/>
                        </CardContent>
                        <CardActions>
                            <Typography component="p" style={{textAlign: 'center', width: '100%'}}>
                                لطفا اندکی شکیبا باشید...
                            </Typography>
                        </CardActions>
                    </Card>
                </Zoom>
                
            </Portal> : null
            }
                <div
                    className={classes.alert}
                    ref={ref => {
                        this.container = ref;
                    }}
                />
            </div>
        );
    }
}

Loading.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);