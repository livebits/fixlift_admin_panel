import React from 'react';
import { Route } from 'react-router-dom';
import { DealArchive } from '../deals/DealArchive';
import CMT from '../companyMessageTemplates/CMT';
import CompanyDashboard from '../dashboard/CompanyDashboard';

export default [
    // <Route exact path="/FactorItems/create/:factorId" component={FactorItemCreate} />,
    <Route exact path="/company-dashboard" component={CompanyDashboard} />,
    <Route exact path="/deals/archive" component={DealArchive} />,
    <Route exact path="/company-message-templates" component={CMT} />,
    
];