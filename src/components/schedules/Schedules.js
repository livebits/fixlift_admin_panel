import React, { Component } from 'react';
import { GET_LIST, GET_MANY, Responsive, withDataProvider } from 'react-admin';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import GridItem from "../CustomComponents/Grid/GridItem";
import GridContainer from "../CustomComponents/Grid/GridContainer.jsx";
import Card from "../CustomComponents/Card/Card.jsx";
import CardHeader from "../CustomComponents/Card/CardHeader.jsx";
import CardIcon from "../CustomComponents/Card/CardIcon.jsx";
import CardFooter from "../CustomComponents/Card/CardFooter.jsx";
import Book from "@material-ui/icons/Book";
import {
    Typography,
    ListItemAvatar,
    ListItemSecondaryAction,
    Paper,
    CardContent,
    withStyles,
    Divider,
    Button,
    Select,
    MenuItem,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@material-ui/core";
import { Title } from 'react-admin';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import FolderIcon from "@material-ui/icons/Folder";

const styles = theme => ({
    successText: {
        color: "green"
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px"
    },
    stats: {
        color: "#999999",
        display: "inline-flex",
        fontSize: "12px",
        lineHeight: "22px",
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
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px 20px 10px 20px',
    },
    label: {
        marginTop: 15
    },
    button: {
        margin: 8,
    },
});

class Schedules extends Component {
    state = {};

    componentDidMount() {
        // this.fetchData();
    }

    componentDidUpdate(prevProps) {
        // handle refresh
        if (this.props.version !== prevProps.version) {
            this.fetchData();
        }
    }

    fetchData() {
        this.fetchOrders();
    }

    async fetchOrders() {
        const { dataProvider } = this.props;
        const aMonthAgo = new Date();
        aMonthAgo.setDate(aMonthAgo.getDate() - 30);
        const { data: recentOrders } = await dataProvider(
            GET_LIST,
            'commands',
            {
                filter: { date_gte: aMonthAgo.toISOString() },
                sort: { field: 'date', order: 'DESC' },
                pagination: { page: 1, perPage: 50 },
            }
        );
        const aggregations = recentOrders
            .filter(order => order.status !== 'cancelled')
            .reduce(
                (stats, order) => {
                    if (order.status !== 'cancelled') {
                        stats.revenue += order.total;
                        stats.nbNewOrders++;
                    }
                    if (order.status === 'ordered') {
                        stats.pendingOrders.push(order);
                    }
                    return stats;
                },
                {
                    revenue: 0,
                    nbNewOrders: 0,
                    pendingOrders: [],
                }
            );
        this.setState({
            revenue: aggregations.revenue.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }),
            nbNewOrders: aggregations.nbNewOrders,
            pendingOrders: aggregations.pendingOrders,
        });
        const { data: customers } = await dataProvider(GET_MANY, 'customers', {
            ids: aggregations.pendingOrders.map(order => order.customer_id),
        });
        this.setState({
            pendingOrdersCustomers: customers.reduce((prev, customer) => {
                prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                return prev;
            }, {}),
        });
    }

    render() {
        const {
            classes,
        } = this.props;
        return (
            <Card>
                <Title title="زمانبندی" />
                <CardContent style={{ paddingLeft: 0, paddingRight: 0 }}>

                    <div className={classes.toolbar}>
                        <Typography variant="h4" component="p" className={classes.label}>از تاریخ</Typography>
                        <Button variant="contained" className={classes.button}>
                            1398/04/23
                        </Button>
                        <Typography variant="h4" component="p" className={classes.label} style={{ marginRight: 10 }}>تا تاریخ</Typography>
                        <Button variant="contained" className={classes.button}>
                            1398/04/23
                        </Button>

                        <Select
                            value={0}
                            style={{ marginRight: 15 }}
                            // onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple',
                            }}
                        >
                            <MenuItem value={0}>انتخاب سرویسکار</MenuItem>
                            <MenuItem value={10}>علی معینی</MenuItem>
                            <MenuItem value={20}>رضا</MenuItem>
                            <MenuItem value={30}>سعید</MenuItem>
                        </Select>

                        <Button variant="contained" className={classes.button} style={{ marginRight: 15 }}>
                            مشاهده
                        </Button>
                    </div>
                    <Divider />
                    <GridContainer style={{padding:12}}>

                        <Table size="small" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>شماره قرارداد</TableCell>
                                    <TableCell>نام ساختمان</TableCell>
                                    <TableCell align="right">نوع کار</TableCell>
                                    <TableCell align="right">تاریخ</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {this.state.dealPlaceholders.map((row, index) => ( */}
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            234324
                                        </TableCell>
                                        <TableCell align="right">گلها</TableCell>
                                        <TableCell align="right">سرویس</TableCell>
                                        <TableCell align="right">1398/4/25</TableCell>
                                    </TableRow>
                                {/* ))} */}
                            </TableBody>
                        </Table>
                    </GridContainer>

                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
});

export default compose(
    connect(mapStateToProps),
    withDataProvider
)(withStyles(styles)(Schedules));
