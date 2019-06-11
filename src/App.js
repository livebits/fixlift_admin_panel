import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './components/auth/authProvider';
import dataProvider from './components/dataProvider/dataProvider';
import Menu from './components/tools/Menu';
import AppLayout from './components/tools/LayoutWithTheme';
// import farsiMessages from 'ra-language-farsi';
import farsiMessages from './components/tools/translates.fa';
import {createMuiTheme, jssPreset, StylesProvider} from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { BrowserRouter } from "react-router-dom";
import {create} from 'jss';
import rtl from 'jss-rtl';
import appReducers from './reducers/';
import customRoutes from './components/tools/routes';
import { indigo, pink, red } from '@material-ui/core/colors';
import { CompanyList } from './components/companies/CompanyList';
import CompanyEdit from './components/companies/CompanyEdit';
import CompanyCreate from './components/companies/CompanyCreate';
import SupervisorAccountRounded from '@material-ui/icons/SupervisorAccount';

import sagas from './components/tools/sagas';
import themeReducer from './components/tools/themeReducer';
import { Login, Layout } from './components/tools';
import Dashboard from './components/dashboard/Dashboard';
import { UserList } from './components/users/UserList';
import { UserCreate } from './components/users/UserCreate';
import { RoleList } from './components/roles/RoleList';
import RoleEdit from './components/roles/RoleEdit';
import RoleCreate from './components/roles/RoleCreate';
import preset from 'jss-preset-default';
import { UserEdit } from './components/users/UserEdit';

// Configure JSS
// const jss = create({plugins: [...jssPreset().plugins, rtl({opt: 'out'})]});

const presets = preset().plugins;

const jss = create({ plugins: [...presets, rtl()] });

// const MyLoginPage = () => <Login backgroundImage="" style={{backgroundColor: '#584165'}} />;

const messages = {
  'fa': farsiMessages,
};

const i18nProvider = locale => messages[locale];

const myTheme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: indigo,
    secondary: indigo,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  status: {
      danger: 'red',
  },
  typography: {
      useNextVariants: true,
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        direction: 'ltr',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        direction: 'ltr',
      },
    },
    MuiInputLabel: {
      shrink: {
        transformOrigin: 'top right',
      },
      
    },
  }
});

class App extends React.Component {

  render() {
    // const { dataProvider } = this.state;

    // if (!dataProvider) {
    //   return (
    //       <div className="loader-container">
    //           <div className="loader">Loading...</div>
    //       </div>
    //   );
    // }

    return (
      <JssProvider jss={jss}>
          <div className="App">
            <Admin 
              theme={myTheme} 
              appLayout={Layout} 
              dashboard={Dashboard} 
              customReducers={{ app: appReducers, theme: themeReducer }} 
              customRoutes={customRoutes}
              dataProvider={dataProvider} 
              authProvider={authProvider}
              title="آسانسور" 
              loginPage={Login} 
              locale="fa" 
              i18nProvider={i18nProvider}
              customSagas={sagas}
            >

                <Resource options={{ label: 'کاربران' }} name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={SupervisorAccountRounded} />
                <Resource options={{ label: 'نقش ها' }} name="roles" list={RoleList} edit={RoleEdit} create={RoleCreate}/>
                <Resource options={{ label: 'شرکت ها' }} name="companies" list={CompanyList} edit={CompanyEdit} create={CompanyCreate} icon={SupervisorAccountRounded} />

                {/* {permissions => [

                  permissions === 'admin' 
                  ? 
                  [ */}
                    {/* <Resource options={{ label: 'ادمین' }} name="AdminManagers" list={AdminList} edit={AdminEdit} create={AdminCreate} icon={VerifiedUserRounded} />,
                    
                    <Resource options={{ label: 'مدیران شرکت ها' }} name="CompanyManagers" list={ManagerList} edit={ManagerEdit} create={ManagerCreate} icon={SupervisorAccountRounded} />,
                  {/* ]
                  : null,

                permissions === 'company'
                  ? [ */}
                    {/* <Resource options={{ label: 'مشتریان' }} name="Customers" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={PersonPinRounded} />,
                    <Resource options={{ label: 'سرویس کاران' }} name="ServiceUsers" list={ServiceUserList} edit={ServiceUserEdit} create={ServiceUserCreate} icon={PeopleRounded} />,
                    <Resource options={{ label: 'قراردادها' }} name="Deals" list={DealList} edit={DealEdit} create={DealCreate} icon={BookmarkRounded} />,
                    <Resource options={{ label: 'خرابی ها' }} name="Damages" list={DamageList} edit={DamageEdit} create={DamageCreate} icon={PagesRounded} />,
                    <Resource options={{ label: 'امداد' }} name="Emergencies" list={EmergencyList} edit={EmergencyEdit} create={EmergencyCreate} icon={WarningRounded} />,
                    <Resource options={{ label: 'گزارشات' }} name="Reports" list={ReportList} edit={ReportEdit} icon={ReportRounded} />,
                    <Resource options={{ label: 'گزارش عملکرد' }} name="serviceUsersPerformanceReport" list={PerformanceReport} icon={ReportRounded} />,
                    <Resource options={{ label: 'فاکتورها' }} name="Factors" list={FactorList} edit={FactorEdit} icon={ReceiptRounded} />,
                    <Resource options={{ label: 'پرداختی ها' }} name="Payments" list={FactorPaymentList} icon={PaymentRounded} />,
                    <Resource options={{ label: 'سرویس کار روی نقشه' }} name="ServiceUsersOnMap" list={ServiceUsersOnMap} icon={MapRounded} />,
                    <Resource options={{ label: 'امور مالی' }} name="CompanyShow" list={CompanyShow} icon={PaymentRounded} />,
                    <Resource options={{ label: 'چک لیست' }} name="CheckLists" list={CheckList} create={CheckListCreate} edit={CheckListEdit} icon={CheckBoxRounded} />,
                    <Resource options={{ label: 'نظرات کاربران' }} name="Comments" list={CommentsList} icon={CommentRounded} />,
                    <Resource options={{ label: 'پیام ها' }} name="Messages" list={MessageList} show={MessageShow} create={MessageCreate} icon={MessageRounded} />,
                    <Resource options={{ label: 'درباره ما' }} name="Settings" list={About} icon={InfoRounded} />,                  
                    <Resource name="CustomerInspections" create={AddCustomerInspection} />,                  
                    
                    <Resource name="FactorItems" edit={FactorItemEdit}/>,
                    <Resource name="AppUsers"/>,
                    <Resource name="MyAppUsers"/>,
                    <Resource name="CustomerPayment"/>,
                    <Resource name="CompanyPayment"/>,
                    <Resource name="importCustomers"/>,
                    <Resource name="CustomerInspections" />, */}
                  {/* ]
                  : null,  
                
              ]} */}
            </Admin>

          </div>
        </JssProvider>
    );
  }
}

export default App;