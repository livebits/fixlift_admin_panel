import { UPDATE } from 'react-admin';

export const PAYMENT_APPROVE = 'PAYMENT_APPROVE';
export const PAYMENT_APPROVE_LOADING = 'PAYMENT_APPROVE_LOADING';
export const PAYMENT_APPROVE_FAILURE = 'PAYMENT_APPROVE_FAILURE';
export const PAYMENT_APPROVE_SUCCESS = 'PAYMENT_APPROVE_SUCCESS';

export const paymentApprove = (id, data, basePath) => ({
    type: PAYMENT_APPROVE,
    payload: { id, data: { ...data, status: 'accepted' }, basePath },
    meta: {
        resource: 'Payments',
        fetch: UPDATE,
        onSuccess: {
            notification: {
                body: 'پرداختی تایید شد.',
                level: 'info',
            },
            redirectTo: '/Payments',
            basePath,
        },
        onFailure: {
            notification: {
                body: 'خطایی رخ داد',
                level: 'warning',
            },
        },
    },
});

export const PAYMENT_REJECT = 'PAYMENT_REJECT';
export const PAYMENT_REJECT_LOADING = 'PAYMENT_REJECT_LOADING';
export const PAYMENT_REJECT_FAILURE = 'PAYMENT_REJECT_FAILURE';
export const PAYMENT_REJECT_SUCCESS = 'PAYMENT_REJECT_SUCCESS';

export const paymentReject = (id, data, basePath) => ({
    type: PAYMENT_REJECT,
    payload: { id, data: { ...data, status: 'rejected' }, basePath },
    meta: {
        resource: 'Payments',
        fetch: UPDATE,
        onSuccess: {
            notification: {
                body: 'پرداختی تایید نشد.',
                level: 'info',
            },
            redirectTo: '/Payments',
            basePath,
        },
        onFailure: {
            notification: {
                body: 'خطایی رخ داد',
                level: 'warning',
            },
        },
    },
});
