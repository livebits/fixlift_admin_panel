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
import { RegionList } from './components/regions/RegionList';
import { RegionEdit } from './components/regions/RegionEdit';
import { RegionCreate } from './components/regions/RegionCreate';
import { SegmentEdit } from './components/segments/SegmentEdit';
import { SegmentCreate } from './components/segments/SegmentCreate';
import { SegmentList } from './components/segments/SegmentList';
import { checklistCategoryList } from './components/checklistCategories/checklistCategoryList';
import { checklistCategoryEdit } from './components/checklistCategories/checklistCategoryEdit';
import { checklistCategoryCreate } from './components/checklistCategories/checklistCategoryCreate';
import { checklistList } from './components/checklists/checklistList';
import { checklistEdit } from './components/checklists/checklistEdit';
import { checklistCreate } from './components/checklists/checklistCreate';
import { UnitList } from './components/units/UnitList';
import { UnitEdit } from './components/units/UnitEdit';
import { UnitCreate } from './components/units/UnitCreate';
import { ServiceUserList } from './components/serviceUsers/ServiceUserList';
import { ServiceUserEdit } from './components/serviceUsers/ServiceUserEdit';
import { ServiceUserCreate } from './components/serviceUsers/ServiceUserCreate';
import { CustomerList } from './components/customers/CustomerList';
import CustomerEdit from './components/customers/CustomerEdit';
import CustomerCreate from './components/customers/CustomerCreate';
import { DealList } from './components/deals/DealList';
import DealEdit from './components/deals/DealEdit';
import DealCreate from './components/deals/DealCreate';
import { DeviceTypeList } from './components/deviceTypes/DeviceTypeList';
import { DeviceTypeEdit } from './components/deviceTypes/DeviceTypeEdit';
import { DeviceTypeCreate } from './components/deviceTypes/DeviceTypeCreate';
import { liftFieldCategoryList } from './components/liftFieldCategories/liftFieldCategoryList';
import { LiftFieldCategoryCreate } from './components/liftFieldCategories/liftFieldCategoryCreate';
import { LiftFieldCategoryEdit } from './components/liftFieldCategories/liftFieldCategoryEdit';
import { LiftFieldList } from './components/liftFields/LiftFieldList';
import { LiftFieldCreate } from './components/liftFields/LiftFieldCreate';
import { LiftFieldEdit } from './components/liftFields/LiftFieldEdit';
import { ServiceList } from './components/services/ServiceList';
import { ServiceCreate } from './components/services/ServiceCreate';
import { ServiceEdit } from './components/services/ServiceEdit';
import { DamageCreate } from './components/damages/DamageCreate';
import { DamageEdit } from './components/damages/DamageEdit';
import { DamageList } from './components/damages/DamageList';
import { EmergencyList } from './components/emergencies/EmergencyList';
import { EmergencyEdit } from './components/emergencies/EmergencyEdit';
import { EmergencyCreate } from './components/emergencies/EmergencyCreate';
import DPHCreate from './components/dealPlaceholders/DPHCreate';
import { DPHList } from './components/dealPlaceholders/DPHList';
import DPHEdit from './components/dealPlaceholders/DPHEdit';
import MTCreate from './components/messageTemplates/MTCreate';
import MTEdit from './components/messageTemplates/MTEdit';
import { MTList } from './components/messageTemplates/MTList';

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

  hasPermisstion = (permissions, requirePermission) => {

    if(permissions !== null && permissions.superAdmin !== null && permissions.superAdmin === "1") {
      return true;
    }
    
    if(permissions !== null && permissions.permissions !== null) {
      let rPermissions = JSON.parse(permissions.permissions);
      let result = rPermissions.filter(function (perm) {
        
        if(perm == requirePermission) {
          return perm;
        }
      });

      return result.length > 0 ? true : false;
    }
  
    return false;
  }

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

                {permissions => [

                    this.hasPermisstion(permissions, 'users') 
                    ? <Resource options={{ label: 'کاربران' }} name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={SupervisorAccountRounded} />
                    : null,

                    this.hasPermisstion(permissions, 'roles') 
                    ? <Resource options={{ label: 'نقش ها' }} name="roles" list={RoleList} edit={RoleEdit} create={RoleCreate}/>
                    : null,

                    this.hasPermisstion(permissions, 'companies') 
                    ? <Resource options={{ label: 'شرکت ها' }} name="companies" list={CompanyList} edit={CompanyEdit} create={CompanyCreate} icon={SupervisorAccountRounded} />
                    : null,

                    this.hasPermisstion(permissions, 'regions') 
                    ? <Resource options={{ label: 'منطقه ها' }} name="regions" list={RegionList} edit={RegionEdit} create={RegionCreate} />
                    : null,

                    // this.hasPermisstion(permissions, 'deviceTypes') 
                    // ? 
                    <Resource options={{ label: 'انواع دستگاه ها' }} name="device-types" list={DeviceTypeList} edit={DeviceTypeEdit} create={DeviceTypeCreate} />
                    // : null
                    ,

                    this.hasPermisstion(permissions, 'segments') 
                    ? <Resource options={{ label: 'قطعات' }} name="segments" list={SegmentList} edit={SegmentEdit} create={SegmentCreate} />
                    : null,

                    this.hasPermisstion(permissions, 'checklistCategories') 
                    ? <Resource options={{ label: 'دسته بندی چک لیست ها' }} name="checklist-categories" list={checklistCategoryList} edit={checklistCategoryEdit} create={checklistCategoryCreate} />
                    : null,
                    this.hasPermisstion(permissions, 'checklists') 
                    ? <Resource options={{ label: 'چک لیست ها' }} name="checklists" list={checklistList} edit={checklistEdit} create={checklistCreate} />
                    : null,

                    this.hasPermisstion(permissions, 'units') 
                    ? <Resource options={{ label: 'واحدها' }} name="units" list={UnitList} edit={UnitEdit} create={UnitCreate} />
                    : null,
                    
                    this.hasPermisstion(permissions, 'serviceUsers') 
                    ? <Resource options={{ label: 'سرویس کارها' }} name="service-users" list={ServiceUserList} edit={ServiceUserEdit} create={ServiceUserCreate} />
                    : null,

                    this.hasPermisstion(permissions, 'services') 
                    ? <Resource options={{ label: 'سرویس ها' }} name="services" list={ServiceList} edit={ServiceEdit} create={ServiceCreate} />
                    : null,
                    
                    this.hasPermisstion(permissions, 'damages') 
                    ? <Resource options={{ label: 'خرابی ها' }} name="damages" list={DamageList} edit={DamageEdit} create={DamageCreate} />
                    : null,

                    this.hasPermisstion(permissions, 'emergencies') 
                    ? <Resource options={{ label: 'امداد' }} name="emergencies" list={EmergencyList} edit={EmergencyEdit} create={EmergencyCreate} />
                    : null,
                    
                    this.hasPermisstion(permissions, 'customers') 
                    ? <Resource options={{ label: 'مشتریان' }} name="customers" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} />
                    : null,

                    this.hasPermisstion(permissions, 'deals') 
                    ? <Resource options={{ label: 'قراردادها' }} name="deals" list={DealList} edit={DealEdit} create={DealCreate} />
                    : null,
                    
                    this.hasPermisstion(permissions, 'dealsArchive') 
                    ? <Resource options={{ label: 'آرشیو قراردادها' }} name="deals-archive" />
                    : null,

                    this.hasPermisstion(permissions, 'liftFieldCategories') 
                    ? <Resource options={{ label: 'دسته بندی قطعات' }} name="lift-field-categories" list={liftFieldCategoryList} edit={LiftFieldCategoryEdit} create={LiftFieldCategoryCreate} />
                    : null,
                    
                    this.hasPermisstion(permissions, 'liftFields') 
                    ? <Resource options={{ label: 'فیلدهای آسانسور' }} name="lift-fields" list={LiftFieldList} edit={LiftFieldEdit} create={LiftFieldCreate} />
                    : null,

                    // this.hasPermisstion(permissions, 'dealPlaceholders') 
                    // ? 
                    <Resource options={{ label: 'فیلدهای قرارداد' }} name="deal-placeholders" list={DPHList} edit={DPHEdit} create={DPHCreate} />
                    // : null
                    ,
                    
                    // this.hasPermisstion(permissions, 'messageTemplates') 
                    // ? 
                    <Resource options={{ label: 'تنظیمات قالب پیامکی' }} name="message-templates" list={MTList} edit={MTEdit} create={MTCreate} />
                    // : null
                    ,

                    this.hasPermisstion(permissions, 'companyMessageTemplates') 
                    ? <Resource options={{ label: 'قالب پیامک' }} name="company-message-templates" />
                    : null,
                ]}
            </Admin>

          </div>
        </JssProvider>
    );
  }
}

export default App;