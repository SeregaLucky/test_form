import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { makeRequest } from 'services/makeRequest';
import ENDPOINTS from 'services/apiConstants';

import { Urls } from 'helpers/urls';
import { noticeError, noticeSuccess } from 'helpers/showNotices';
import { YupMesses } from 'helpers/helpersYup';

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
          redirect_url:
            process.env.REACT_APP_BASE_LOCAL_URL + Urls.getResetPasswordURL(),
        },
      });

      noticeSuccess(detail);
    } catch (error) {
      error.response.data.detail.forEach((detailError) => {
        noticeError(detailError.error);
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    isLoading,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
