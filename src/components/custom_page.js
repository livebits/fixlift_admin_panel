import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

const Page = () => (
    <Card>
        <Title title="My Page" />
        <CardContent>
            ...
        </CardContent>
    </Card>
);

export default Page;