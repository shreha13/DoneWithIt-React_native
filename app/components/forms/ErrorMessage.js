import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';

const ErrorMessage = ({ message, visible }) => {
    if (!(message && visible)) return null;
    return (
        <AppText style={styles.error}>{message}</AppText>
    );
}

const styles = StyleSheet.create({
    error: {
        color: colors.danger
    }
})

export default ErrorMessage;