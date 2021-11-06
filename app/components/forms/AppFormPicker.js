import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

const AppFormPicker = ({ items, name, width, numOfColumns, PickerItemComponent, placeholder }) => {
    const { errors, touched, setFieldValue, values } = useFormikContext();
    return (
        <>
            <AppPicker numOfColumns={numOfColumns} PickerItemComponent={PickerItemComponent} width={width} items={items}
                placeholder={placeholder} selectedItem={values[name]} setSelectedItem={(item) => setFieldValue(name, item.label)} />
            <ErrorMessage message={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;