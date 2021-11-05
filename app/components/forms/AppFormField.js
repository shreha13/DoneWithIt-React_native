import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, width, ...props }) => {
    const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
    return (
        <>
            <AppTextInput {...props} width={width}
                onChangeText={handleChange(name)} onBlur={() => setFieldTouched(name)} />
            <ErrorMessage message={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;