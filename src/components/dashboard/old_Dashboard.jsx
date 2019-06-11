import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import GridItem from "../CustomComponents/Grid/GridItem";
import GridContainer from "../CustomComponents/Grid/GridContainer.jsx";
import Card from "../CustomComponents/Card/Card.jsx";
import CardHeader from "../CustomComponents/Card/CardHeader.jsx";
import CardIcon from "../CustomComponents/Card/CardIcon.jsx";
import CardFooter from "../CustomComponents/Card/CardFooter.jsx";
import Book from "@material-ui/icons/Book";
import { Typography, ListItemAvatar, ListItemSecondaryAction, Paper, CardContent } from '@material-ui/core';
import dataProvider from '../dataProvider/dataProvider';
import { Show, FunctionField, ReferenceManyField, Datagrid, TextInput,
    ArrayInput, SimpleFormIterator, CheckboxGroupInput, NumberInput,
    SelectInput, GET_ONE, CREATE, Toolbar, crudCreate } from 'react-admin';
import {TextField as RATextField} from 'react-admin';
import { Checkbox, Table, TableHead, TableRow, TableCell, TableBody, FormControlLabel, CardActions, Button, LinearProgress, FormControl, InputLabel, Input } from '@material-ui/core';

const styles = theme => ({
    successText: {
        color: 'green'
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px"
    },
    stats: {
        color: "#000000",
        display: "inline-flex",
        fontSize: "16px",
        lineHeight: "22px",
        height: "15px",
        "& svg": {
            top: "4px",
            width: "16px",
            height: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            top: "4px",
            fontSize: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px"
        }
    },
    cardCategory: {
        color: "#000000",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitle: {
        color: "#3C4858",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
});

class Dashboard extends React.Component {
    
    constructor(props) {
        super(props);
    }

    state = {
        stats: {
            customers: '',
            services: '',
            damges: '',
            companies: '',
        }
    };

    componentDidMount() {
        
        dataProvider(GET_ONE, 'DashboardStats', {})
            .then(stats => {
                
                this.setState({ stats: stats.data })
            }
        );
    }

    render() {
        const {classes, permissions} = this.props;
        const {stats} = this.state;
    
        return <div>
            <GridContainer>

                {permissions === 'company' ? <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Book/>
                            </CardIcon>
                            <p className={classes.cardCategory}>تعداد مشتریان</p>
                            <h3 className={classes.cardTitle}>
                                
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            {stats.customers}
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem> : '' }

                {permissions === 'company' ? <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Book/>
                            </CardIcon>
                            <p className={classes.cardCategory}>تعداد سرویس کاران</p>
                            <h3 className={classes.cardTitle}>
                                
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            {stats.services}
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem> : '' }

                {permissions === 'company' ? <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Book/>
                            </CardIcon>
                            <p className={classes.cardCategory}>تعداد خرابی ها</p>
                            <h3 className={classes.cardTitle}>
                                
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            {stats.damages}
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem> : '' }

                {permissions === 'admin' ? <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Book/>
                            </CardIcon>
                            <p className={classes.cardCategory}>تعداد شرکت ها</p>
                            <h3 className={classes.cardTitle}>
                                
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                            {stats.companies}
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem> : '' }

                
            </GridContainer>
        </div>
    }
};

export default withStyles(styles)(Dashboard);