import React, {Component}  from 'react';
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import dataProvider from '../dataProvider/dataProvider';
import { Show, FunctionField, ReferenceManyField, Datagrid, TextInput,
    ArrayInput, SimpleFormIterator, CheckboxGroupInput, NumberInput,
    SelectInput, GET_ONE, CREATE, Toolbar, crudCreate } from 'react-admin';
import {TextField as RATextField} from 'react-admin';
import { Checkbox, Table, TableHead, TableRow, TableCell, TableBody, FormControlLabel, CardActions, Button, LinearProgress, FormControl, InputLabel, Input } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import GridItem from "../CustomComponents/Grid/GridItem";
import GridContainer from "../CustomComponents/Grid/GridContainer.jsx";
// import Card from "../CustomComponents/Card/Card.jsx";
import CardHeader from "../CustomComponents/Card/CardHeader.jsx";
import CardIcon from "../CustomComponents/Card/CardIcon.jsx";
import CardFooter from "../CustomComponents/Card/CardFooter.jsx";
import Book from "@material-ui/icons/Book";
import { Typography, ListItemAvatar, ListItemSecondaryAction, Paper } from '@material-ui/core';


import jMoment from 'moment-jalaali';
jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    successText: {
        color: 'green'
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px"
    },
    cardBox: {
        background: 'rgb(227, 227, 227) none repeat scroll 0% 0%',
    },
    stats: {
        color: "#000000",
        display: "inline-flex",
        fontSize: "16px",
        lineHeight: "22px",
        marginBottom: "10px",
        height: "10px",
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
        color: "#999999",
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

class CompanyShow extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        company: {
            factors: '',
            creditor: '',
            paid: ''
        }
    };

    componentDidMount() {
        
        dataProvider(GET_ONE, 'CompanyShow', {})
            .then(company => {
                
                this.setState({ company: company.data })
            }
        );
    }

    render() {
        
        const { classes } = this.props;
        const record = this.state.company;        

        return (
            <Card>
                <Title title={`امور مالی`} />
                <CardContent>

                <GridContainer style={{marginTop: 50}}>

                    <GridItem xs={12} sm={6} md={3}>
                        <Card className={classes.cardBox}>
                            <CardHeader color="success" stats icon>
                                <p className={classes.cardCategory}>مقدار کل فاکتورها</p>
                                <p className={classes.cardTitle}>
                                    
                                </p>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                {`${record.factors}`}
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={3}>
                        <Card className={classes.cardBox}>
                            <CardHeader color="success" stats icon>
                                <p className={classes.cardCategory}> مقدار پرداختی ها</p>
                                <p className={classes.cardTitle}>
                                    
                                </p>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                {`${record.paid}`}
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={3}>
                        <Card className={classes.cardBox}>
                            <CardHeader color="success" stats icon>
                                <p className={classes.cardCategory}>مقدار طلبکاری</p>
                                <p className={classes.cardTitle}>
                                    
                                </p>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                {`${record.creditor}`}
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>

                    

                    <br  />
                    <p style={{marginTop: 20}}>مبالغ پرداختی</p>

                    <ReferenceManyField
                        label="پرداخت های مشتری"
                        reference="CompanyPayment"
                        resource="CompanyPayment"
                        target=""
                        record={record}
                        basePath="/"
                        fullWidth
                    >
                        <Datagrid>

                            <FunctionField label="شماره فاکتور" source="factorCode" render={
                                record => record.factorId === null ? '' : record.factorId
                            }/>

                            <RATextField label="مبلغ پرداختی" source="price" />

                            <FunctionField label="وضعیت" source="status" render={record => record.status === 'accepted' ? 'تایید شده' : 'تاییده نشده'}/>
                            <FunctionField label="تاریخ پرداخت" source="date" render={
                                record => record.date === null ? '' : jMoment(record.date, 'YYYY-M-D').format('jYYYY/jM/jD')
                                }/>

                        </Datagrid>
                    </ReferenceManyField>
                </CardContent>
            </Card>
        );
    }
}

CompanyShow.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
    { factorItem: state.app.factor.factorItem }
);

export default withRouter(connect(
    null, {
})(withStyles(styles)(CompanyShow)));