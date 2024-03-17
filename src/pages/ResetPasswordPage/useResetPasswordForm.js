import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { noticeError, noticeSuccess } from 'helpers/showNotices';
import { MIN_PASSWORD_LENGTH, YupMesses } from 'helpers/helpersYup';
import { getSearches } from 'helpers/getSearches';

import { makeRequest } from 'services/makeRequest';
import ENDPOINTS from 'services/apiConstants';

/* Hardcoded code */
const hardcodeToken = 'my_custom_token_eyJhbGciOiJIUzI';
const hardcodeSecret = 'my_custom_secret_key_eyJhbGciOiJIUzI';

const schema = yup.object({
  password: yup
    .string()
    .required(YupMesses.REQUIRED('Password'))
    .min(MIN_PASSWORD_LENGTH, YupMesses.MIN_STR(MIN_PASSWORD_LENGTH))
    .matches(/\d/, YupMesses.MIN_ONE_NUMERIC)
    .matches(/\p{Lu}/u, YupMesses.MIN_ONE_UPPERCASE_LETTER)
    .matches(/\p{Ll}/u, YupMesses.MIN_ONE_LOWERCASE_LETTER)
    .default(''),

  confirmPassword: yup
    .string()
    .required(YupMesses.REQUIRED('Confirm password'))
    .min(MIN_PASSWORD_LENGTH, YupMesses.MIN_STR(MIN_PASSWORD_LENGTH))
    .test('match', 'Fields must match', function (value) {
      return value === this.parent.password;
    })
    .default(''),
});

export const useResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [token, secret] = getSearches(['token', 'secret']);

  /* FORM */
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  /* METHOD */
  const onSubmit = async ({ password, confirmPassword }) => {
    setIsLoading(true);

    try {
      const { detail } = await makeRequest({
        method: 'POST',
        url: ENDPOINTS.AUTH.UPDATE_PASSWORD,
        data: {
          token: token || hardcodeToken,
          secret: secret || hardcodeSecret,
          password,
          password_confirm: confirmPassword,
        },
      });

      noticeSuccess(detail);
    } catch (error) {
      noticeError(error.response.data.detail);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return {
    register,
    isLoading,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
