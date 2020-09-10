import i18n from '../i18n'

export const emailRegex = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? i18n.t("validation.incorrectEmail")
    : undefined;

export const requiredField = (value) => (value ? undefined : i18n.t("validation.require"));

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
