import React from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { TRANSACTION_FORM } from 'src/constants/forms';
import moment from 'moment';
import SelectInput from '../SelectInputField';
import TextInput from '../TextInputField';
import DatePickerField from '../DatePickerField';
import validate from './validate';

function TransactionForm(
    {
        handleSubmit,
        submitting,
        invalid,
        options,
        submitBtnText
    }
) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Field
                name="value"
                props={{
                    label: 'Sum',
                    placeholder: 'Enter sum...'
                }}
                component={TextInput}
            />
            <Field
                name="accountId"
                component={SelectInput}
                props={{
                    label: 'Account',
                    options:options.accounts
                }}
            />
            <Field
                name="categoryId"
                component={SelectInput}
                props={{
                    label: 'Category',
                    options: options.categories
                }}
            />
            <Field
                name="date"
                props={{
                    label: 'Date'
                }}
                format={value => moment(value).format('MM/DD/YYYY')}
                component={DatePickerField}
            />
            <Field
                name="note"
                props={{
                    label: 'Note',
                    placeholder: 'Enter note...'
                }}
                component={TextInput}
            />
            <Button
                disabled={invalid || submitting}
                onPress={handleSubmit}
                title={submitBtnText}
            />
        </ScrollView>
    );
}

export default reduxForm({
    form: TRANSACTION_FORM,
    initialValues: {
        date: Date.now()
    },
    validate
})(TransactionForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        minWidth: 300
    }
});
