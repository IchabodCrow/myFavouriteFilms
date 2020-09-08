import { Trans } from 'react-i18next';

export const emailRegex = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Incorrect email"
    : undefined;

export const required = (value) => (value ? undefined : "Required");

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
