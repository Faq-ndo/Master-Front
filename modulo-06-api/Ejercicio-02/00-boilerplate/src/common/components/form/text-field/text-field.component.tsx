import React from 'react';
import { cx } from '@emotion/css';
import { useField } from 'formik';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';
import * as classes from './text-field.styles';

export const TextFieldComponent: React.FunctionComponent<TextFieldProps> = (props) => {
  const { name, inputProps } = props;

  const [field, meta, helpers] = Boolean(name) ? useField(name) : [];
  const hasError = Boolean(meta && meta.touched && meta.error);
  const helperText = Boolean(field) ? meta?.error : props.helperText;

  return (
    <MuiTextField
      {...props}
      name={name}
      id={name}
      value={field ? field.value : ''}
      onChange={(e) => {
        if (field && helpers) {
          helpers.setValue(e.target.value);
        }
      }}
      onBlur={(e) => {
        if (field) {
          field.onBlur(e);
        }
      }}
      error={hasError}
      helperText={hasError ? helperText : ''}
      fullWidth={true}
      margin="normal"
      inputProps={{
        ...inputProps,
        className: cx(inputProps?.className, classes.input),
      }}
    />
  );
};