import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { makeRequest } from 'services/makeRequest';
import ENDPOINTS from 'services/apiConstants';

import { Urls } from 'helpers/urls';
import { noticeError, noticeSuccess } from 'helpers/showNotices';
import { YupMesses } from 'helpers/helpersYup';
import { currentRedirectUrl } from 'helpers/checkEnv';

const schema = yup.object({
  email: yup
    .string()
    .required(YupMesses.REQUIRED('Email'))
    .email(YupMesses.EMAIL)
    .default(''),
});

export const useForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);

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
  const onSubmit = async ({ email }) => {
    setIsLoading(true);

    try {
      const { detail } = await makeRequest({
        method: 'POST',
        url: ENDPOINTS.AUTH.FORGOT_PASSWORD,
        data: {
          email,
          redirect_url: currentRedirectUrl + Urls.getResetPasswordURL(),
        },
      });

      noticeSuccess(detail);
    } catch (error) {
      const { detail } = error.response.data;

      if (Array.isArray(detail)) {
        detail.forEach((detailError) => noticeError(detailError.error));
      } else {
        noticeError(detail);
      }
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
