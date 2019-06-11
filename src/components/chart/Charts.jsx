import React, {Component}  from 'react';
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import dataProvider from '../dataProvider/dataProvider';
import { Create, SimpleForm, ReferenceArrayInput, SelectArrayInput, TextInput, TextField, 
    ArrayInput, SimpleFormIterator, CheckboxGroupInput, FormDataConsumer,
    SelectInput, GET_LIST, CREATE, Toolbar, crudCreate } from 'react-admin';
import { Checkbox, Paper, Table, TableHead, TableRow, TableCell, TableBody, FormControlLabel, CardActions, Button, LinearProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
// import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line, Legend, Bar, BarChart, PieChart, Pie, RadialBarChart, RadialBar } from 'recharts';
import Grid from '@material-ui/core/Grid';
import {Doughnut, Bar, Line} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Vazir'

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});

class Charts extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        users: [],
    };

    componentDidMount() {
        
        dataProvider(GET_LIST, 'charts', {})
            .then(users => {
                    this.setState({ users: users.data })
                    // this.props.setMenus(menus.data);
                }
            );
    }

    render() {

        const { users } = this.state;
        const { classes } = this.props;
        
        const registersData = {
            labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
            datasets: [
              {
                label: 'نمودار ثبت نامی ها',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
              }
            ]
          };

          const gameData = {
            labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
            datasets: [
              {
                label: 'نمودار بازی',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
              }
            ]
          };

          const dailyData = {
            labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
            datasets: [
              {
                label: 'نمودار تعداد روزانه',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
              }
            ]
          };

          const citiesData = {
            labels: [
                'تهران',
                'شیراز',
                'اصفهان',
                'مشهد'
            ],
            datasets: [{
                data: [300, 50, 100, 364],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };

        return (
            <div>
                <Card>
                    <Title title="آمار" />
                    <CardContent style={{direction: 'ltr'}}>

                        <Grid container>
                            <Grid item xs={12} sm={6} md={6}>

                                <Bar
                                    data={registersData}
                                    width={100}
                                    height={400}
                                    options={{
                                        maintainAspectRatio: false,
                                        beginAtZero: true
                                    }}
                                />

                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>

                                <Line 
                                    width={100}
                                    height={80} 
                                    data={gameData} />

                            </Grid>

                        </Grid>

                        <Grid container>
                            <Grid item xs={12} sm={6} md={6}>

                                <Line 
                                    width={100}
                                    height={80} 
                                    data={dailyData} />

                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>

                                <Doughnut width={100}
                                    height={80} data={citiesData} />

                            </Grid>

                        </Grid>

                    </CardContent> 
                </Card>
            </div>
        );
    }
}

Charts.propTypes = {
    classes: PropTypes.object.isRequired,
    push: PropTypes.func,
    fetchStart: PropTypes.func,
    fetchEnd: PropTypes.func,
};

export default withRouter(connect(null, {
    // setMenus
})(withStyles(styles)(Charts)));