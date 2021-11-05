import { Formik } from 'formik';
import React from 'react';

const AppForm = ({ children, ...props }) => {
    return (
        <Formik {...props}>{() => children}</Formik>
    );
}

export default AppForm;