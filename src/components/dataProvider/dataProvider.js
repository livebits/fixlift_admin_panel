import { stringify } from 'query-string';
import {
    fetchUtils,
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    DELETE_MANY,
} from 'react-admin';
import { translate } from 'ra-core';


const API_URL = 'http://localhost:3030';

/**
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {
    let url = '';

    const options = {
        headers: new Headers({
            Accept: 'application/json',
            "authorization": `Bearer ${localStorage.getItem('jwt_token')}`
        }),
    };

    switch (type) {
        case GET_LIST:

            let page = 0;
            let perPage = 0;
            if (params.pagination !== null && params.pagination !== undefined) {
                page = params.pagination.page;
                perPage = params.pagination.perPage;
            }
            if (params.sort !== null && params.sort !== undefined) {
                const { field, order } = params.sort;
            }
            // let query = "";
            let query = {
                // sort: JSON.stringify([field, order]),
                // range: JSON.stringify([
                //     (page - 1) * perPage,
                //     page * perPage - 1,
                // ]),
                offset: ((page - 1) * perPage),
                limit: perPage,
                skip: (perPage * (page - 1))
            };

            if(params.filter) {
                query.where = params.filter;
            }


            switch (resource) {
                case 'Customers':
                    // query = {"include": {"where": {"roles.name": "customer"}}};
                    url = `${API_URL}/AppUsers/customers?filter=${JSON.stringify(query)}`;
                    break;
                case 'CustomerInspections':
                    console.log("params:", JSON.stringify(params));
                    let customerId = localStorage.getItem('customerId');
                    params.filter.customerId = customerId;
                    query = {
                        filter: params.filter,
                    };
                    url = `${API_URL}/Inspections/show?filter=${JSON.stringify(query)}`;
                    break;
                case 'MyAppUsers':
                    // query = {"include": {"where": {"roles.name": "customer"}}};
                    url = `${API_URL}/AppUsers/MyAppUsers?filter=${JSON.stringify(query)}`;
                    break;
                case 'ServiceUsers':
                    query = { "where": { "roles.name": "service" } };
                    url = `${API_URL}/AppUsers/serviceUsers?filter=${JSON.stringify(query)}`;
                    break;
                case 'serviceUsersPerformanceReport':
                    query = { "where": { "roles.name": "service" } };
                    url = `${API_URL}/AppUsers/serviceUsersPerformanceReport?filter=${JSON.stringify(query)}`;
                    break;
                case 'Deals':
                    query = "";
                    url = `${API_URL}/Deals/AllDeals?filter=${stringify(query)}`;
                    break;
                case 'CompanyManagers':
                    query = "";
                    url = `${API_URL}/Managers/CompanyManagers?filter=${stringify(query)}`;
                    break;
                case 'AdminManagers':
                    query = "";
                    url = `${API_URL}/Managers/AdminManagers?filter=${stringify(query)}`;
                    break;
                case 'Messages':
                    query = "";
                    url = `${API_URL}/Messages/CompanyMessages?filter=${stringify(query)}`;
                    break;
                // case 'Emergencies':
                //     query = "";
                //     url = `${API_URL}/Damages/AllEMGDamages?filter=${stringify(query)}`;
                //     break;
                case 'CheckLists':
                    query = "";
                    url = `${API_URL}/CheckLists/AllCheckLists?filter=${stringify(query)}`;
                    break;
                case 'Damages':
                    query = {
                        // sort: JSON.stringify([field, order]),
                        // range: JSON.stringify([
                        //     (page - 1) * perPage,
                        //     page * perPage - 1,
                        // ]),
                        filter: params.filter,
                    };
                    url = `${API_URL}/Damages/AllDamages?filter=${JSON.stringify(query)}`;
                    break;
                case 'Reports':
                    query = '';
                    url = `${API_URL}/Reports/AllReports?filter=${JSON.stringify(query)}`;
                    break;
                case 'Factors':
                    query = '';
                    url = `${API_URL}/Factors/AllFactors?filter=${JSON.stringify(query)}`;
                    break;
                case 'Payments':
                    query = '';
                    url = `${API_URL}/Payments/AllFactorPayments?filter=${JSON.stringify(query)}`;
                    break;
                case 'deals-archive':

                    if (stringify(query) !== "") {

                        url = `${API_URL}/deals/archive?filter=${JSON.stringify(query)}`;
                    } else {
                        url = `${API_URL}/deals/archive`;
                    }
                    break;
                case 'deal-names':
                    url = `${API_URL}/deals`;
                    break;
                case 'deals':
                    url = `${API_URL}/deals/getByDetail?filter=${JSON.stringify(query)}`;
                    break;
                default:
                    if (stringify(query) !== "") {

                        url = `${API_URL}/${resource}?filter=${JSON.stringify(query)}`;
                    } else {
                        url = `${API_URL}/${resource}`;
                    }
                    break;
            }
            break;
        case GET_ONE:
            switch (resource) {
                case 'lifts/device-fields':
                    url = `${API_URL}/lifts/device-fields/${params.deviceTypeId}`;
                    break;
                case 'lifts/get-device-fields':
                    url = `${API_URL}/lifts/get-device-fields/${params.liftId}`;
                    break;
                case 'Customers':
                    url = `${API_URL}/AppUsers/${params.id}`;
                    break;
                case 'CustomerInspections':
                    url = `${API_URL}/Inspections/${params.id}`;
                    break;
                case 'DamageDetail':
                    url = `${API_URL}/Damages/DamagesDetail/${params.id}`;
                    break;
                case 'GetCompanyInfo':
                    url = `${API_URL}/Settings/GetCompanyInfo`;
                    break;
                case 'ServiceUsers':
                    url = `${API_URL}/AppUsers/${params.id}`;
                    break;
                case 'CompanyManagers':
                    url = `${API_URL}/Managers/${params.id}`;
                    break;
                case 'AdminManagers':
                    url = `${API_URL}/Managers/${params.id}`;
                    break;
                // case 'Emergencies':
                //     url = `${API_URL}/Damages/${params.id}`;
                //     break;
                case 'CustomerShow':
                    query = '';
                    url = `${API_URL}/AppUsers/CustomerShow/${params.id}`;
                    break;
                case 'CompanyShow':
                    query = '';
                    url = `${API_URL}/Companies/CompanyShow`;
                    break;
                case 'DashboardStats':
                    // query = '';
                    url = `${API_URL}/Managers/DashboardStats`;
                    break;
                case 'deal-names':
                    // query = '';
                    url = `${API_URL}/deals`;
                    break;
                case 'deal-placeholders/get-table-fields':
                    options.body = JSON.stringify(params);
                    options.method = 'POST';
                    url = `${API_URL}/deal-placeholders/get-table-fields`;
                    break;
                case 'company-info':
                    url = `${API_URL}/companies/getDetail`;
                    break;
                case 'services':
                    url = `${API_URL}/services/getDetail/${params.id}`;
                    break;
                case 'damages':
                    url = `${API_URL}/damages/getDetail/${params.id}`;
                    break;
                default:
                    url = `${API_URL}/${resource}/${params.id}`;
                    break;
            }
            break;
        case GET_MANY: {
            const query = {
                "where": { "id": { inq: params.ids } },
            };
            switch (resource) {
                case 'Customers':
                    url = `${API_URL}/AppUsers?filter=${JSON.stringify(query)}`;
                    break;
                case 'ServiceUsers':
                    url = `${API_URL}/AppUsers?filter=${JSON.stringify(query)}`;
                    break;
                case 'CompanyManagers':
                    url = `${API_URL}/Managers?filter=${JSON.stringify(query)}`;
                    break;
                case 'AdminManagers':
                    url = `${API_URL}/Managers?filter=${JSON.stringify(query)}`;
                    break;
                case 'deal-names':
                    url = `${API_URL}/deals?filter=${JSON.stringify(query)}`;
                    break;
                default:
                    url = `${API_URL}/${resource}?filter=${JSON.stringify(query)}`;
                    break;
            }

            break;
        }
        case GET_MANY_REFERENCE: {
            // console.log(params);

            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            let query = {
                // sort: JSON.stringify([field, order]),
                // range: JSON.stringify([
                //     (page - 1) * perPage,
                //     page * perPage - 1,
                // ]),
                "where": {
                    ...params.filter,
                    [params.target]: params.id,
                },
            };
            switch (resource) {
                case 'CustomerPayment':
                    query = {
                        "where": {
                            ...params.filter,
                            [params.target]: params.id,
                        },
                        "include": ["factors"]
                    }
                    url = `${API_URL}/Payments?filter=${JSON.stringify(query)}`;
                    break;

                case 'CompanyPayment':
                    query = ''
                    url = `${API_URL}/Payments/AllCompanyPayments?filter=${JSON.stringify(query)}`;
                    break;

                default:
                    url = `${API_URL}/${resource}?filter=${JSON.stringify(query)}`;
                    break;
            }

            break;
        }
        case UPDATE:
            url = `${API_URL}/${resource}/${params.data.id}`;

            Object.keys(params.data).map(function (key, index) {

                if (params.data[key] === null) {
                    delete params.data[key];
                }
            });

            switch (resource) {
                case 'companies':

                    if (params.data.location == null) delete params.data.location;
                    if (params.data.latitude == null) delete params.data.latitude;
                    if (params.data.longitude == null) delete params.data.longitude;
                    if (params.data.logo == null) delete params.data.logo;

                    // url = `${API_URL}/companies/${params.data.id}`;
                    break;
                case 'users':

                    if (params.data.lastName == null) delete params.data.lastName;

                    break;
                case 'Settings':
                    console.log(params);

                    url = `${API_URL}/Settings/UpdateSettings`;
                    break;
                case 'Damages':
                    console.log(params);

                    url = `${API_URL}/Damages/Update`;
                    break;
                case 'FactorItems':
                    params.data.total = params.data.quantity * params.data.unitPrice;
                    url = `${API_URL}/FactorItems/${params.data.id}`;
                    break;
                case 'ServiceUsers':
                    params.data.username = params.data.mobile;
                    params.data.password = params.data.mobile;
                    url = `${API_URL}/AppUsers/${params.data.id}`;
                    break;
                // case 'Emergencies':
                //     url = `${API_URL}/Damages/${params.data.id}`;
                //     break;
                case 'CompanyManagers':
                    url = `${API_URL}/Managers/${params.data.id}`;
                    break;
                case 'AdminManagers':
                    url = `${API_URL}/Managers/${params.data.id}`;
                    break;
                case 'company-info':
                    delete params.data.id;
                    url = `${API_URL}/companies/update`;
                    break;
                default:
                    url = `${API_URL}/${resource}/${params.data.id}`;
                    break;
            }

            options.method = 'PATCH';

            options.body = JSON.stringify(params.data);
            break;
        case CREATE:

            Object.keys(params.data).map(function (key, index) {

                if (params.data[key] === null) {
                    delete params.data[key];
                }
            });

            switch (resource) {
                case 'Customers':
                    url = `${API_URL}/AppUsers`;
                    params.data.role = "customer";
                    options.body = JSON.stringify(params.data);
                    break;
                case 'CustomerInspections':
                    url = `${API_URL}/Inspections/addNew`;
                    options.body = JSON.stringify(params.data);
                    break;
                case 'ServiceUsers':
                    url = `${API_URL}/AppUsers`;
                    params.data.role = "service";
                    options.body = JSON.stringify(params.data);
                    break;
                case 'CompanyManagers':
                    url = `${API_URL}/Managers`;
                    options.body = JSON.stringify(params.data);
                    break;
                case 'AdminManagers':
                    url = `${API_URL}/Managers`;
                    options.body = JSON.stringify(params.data);
                    break;
                // case 'Emergencies':
                //     url = `${API_URL}/Damages`;
                //     params.data.isEMG = 1;
                //     options.body = JSON.stringify(params.data);
                //     break;
                case 'importCustomers':
                    url = `${API_URL}/AppUsers/ImportUsers`;

                    const formData = new FormData();
                    formData.append('file', params.data.file[0]);

                    options.body = formData;
                    break;
                case `service-segment`:
                    
                    url = `${API_URL}/services/${params.data.serviceId}/service-segments`;

                    options.body = JSON.stringify({
                        segmentId: params.data.serviceSegmentId,
                        count: params.data.ServiceSegmentCount,
                    });

                    break;
                case `damage-segment`:
                
                    url = `${API_URL}/damages/${params.data.damageId}/damage-segments`;

                    options.body = JSON.stringify({
                        segmentId: params.data.damageSegmentId,
                        count: params.data.damageSegmentCount,
                    });

                    break;
                default:
                    console.log(params);
                    
                    url = `${API_URL}/${resource}`;
                    options.body = JSON.stringify(params.data);
                    break;
            }

            options.method = 'POST';

            break;
        case DELETE:
            switch (resource) {
                case 'Customers':
                    url = `${API_URL}/AppUsers/${params.id}`;
                    break;
                case 'ServiceUsers':
                    url = `${API_URL}/AppUsers/${params.id}`;
                    break;
                case 'CompanyManagers':
                    url = `${API_URL}/Managers/${params.id}`;
                    break;
                // case 'Emergencies':
                //     url = `${API_URL}/Damages/${params.id}`;
                //     break;
                case 'AdminManagers':
                    url = `${API_URL}/Managers/${params.id}`;
                    break;
                case 'service-segments':
                    url = `${API_URL}/services/delete-service-segments/${params.id}`;
                    break;    
                case 'damage-segments':
                    url = `${API_URL}/damages/delete-damage-segments/${params.id}`;
                    break;
                default:
                    url = `${API_URL}/${resource}/${params.id}`;
                    break;
            }

            options.body = JSON.stringify(params);
            options.method = 'DELETE';
            break;
        default:
            throw new Error(`Unsupported fetch action type ${type}`);
    }
    return { url, options };
};


/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
    const { headers, json } = response;
    console.log(type, '>>>', resource);
    switch (type) {
        case GET_LIST:

            return {
                data: json.data ? json.data : json,
                total: json.total ? parseInt(json.total, 10) : parseInt(json.length, 10),
            };


        // case GET_ONE:

        // switch (resource) {
        //     case "menu":

        //         let menuData = json;
        //         let menuActionsArray = [];
        //         menuData.actions.forEach((action, index) => {

        //             menuActionsArray[index] = action.id;
        //         });
        //         menuData.actions = menuActionsArray;

        //         return {
        //             data: menuData
        //         };

        //     case "manager":
        //         let managerData = json;
        //         let rolesArray = [];
        //         managerData.roles.forEach((action, index) => {

        //             rolesArray[index] = action.id;
        //         });
        //         managerData.roles = rolesArray;
        //         console.log(">>", json);

        //         return {
        //             data: managerData
        //         };

        //     default:
        //         return {
        //             data: json
        //         };
        //         break;
        // };
        case UPDATE:
            switch (resource) {
                case "company-message-templates":
                    return { data: { ...params.data, id: params.id } };
                case "roles":
                    return { data: { ...params.data, id: params.id } };
                default:
                    return { data: { ...params.data, id: params.id } };
            };
        // switch (resource) {
        //     case "manager":

        //         let managerData = json;
        //         let rolesArray = [];
        //         // menuData.roles.forEach((action, index) => {

        //         //     rolesArray[index] = action.id;
        //         // });
        //         managerData.roles = rolesArray;
        //         console.log(managerData);

        //         return {
        //             data: managerData
        //         };

        //     default:
        //         return {
        //             data: json.map(x => x)
        //         };
        //         break;
        // };
        case CREATE:

            switch (resource) {
                case "company-message-templates":
                    return { data: { ...params.data, id: params.id } };
                default:
                    return { data: { ...params.data, id: json.id } };
            };

        case DELETE:

            switch (resource) {
                default:
                    return { data: { ...params.data, id: params.id } };
            };

        case GET_MANY:
            return {
                data: json.data ? json.data : json,
                total: json.total ? parseInt(json.total, 10) : parseInt(json.length, 10),
            };

        case GET_MANY_REFERENCE:
            return {
                data: json,
                total: parseInt(json.length, 10),
            };
        default:
            return { data: json };
    }
};

const convertHTTPErrorToDataProvider = (error, type, resource, params) => {
    // const { headers, json } = response;

    let errors = parseErrors(error);
    return Promise.reject({ message: errors });
};

//helper funcs
function parseErrors(err) {

    //handle error
    let errors = new Array();
    if (err.error.statusCode === 401) {

        errors[0] = "دسترسی غیر مجاز";
        return "دسترسی غیر مجاز";
    }
    else if (err.error.statusCode === 422) {

        let error_code = err.error.message;
        let error_parts = [];

        if (error_code.includes(":")) {
            error_parts = error_code.split(":");
        }

        let message = "";

        if (error_parts.length > 0) {
            message = `ra.validation.${error_parts[1]}`;
        }

        return message;
    }
    else {

        errors[0] = "خطای سرور رخ داده است";
        return "خطای سرور رخ داده است";
    }
};


/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default (type, resource, params) => {

    const { fetchJson } = fetchUtils;
    const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
    return fetchJson(url, options)
        .then(response => convertHTTPResponseToDataProvider(response, type, resource, params))
        .catch(error => convertHTTPErrorToDataProvider(error.body, type, resource, params));
};