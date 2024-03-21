import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';

import authOperations from '../../../../redux/auth/authOperations';
import { getIsLoginLoading } from '../../../../redux/auth/authSelectors';

import { MIN_PASSWORD_LENGTH, YupMesses } from 'helpers/helpersYup';

const schema = yup.object({
  email: yup
    .string()
    .required(YupMesses.REQUIRED('Email'))
    .email(YupMesses.EMAIL)
    .default(''),

  password: yup
    .string()
    .required(YupMesses.REQUIRED('Password'))
    .min(MIN_PASSWORD_LENGTH, YupMesses.MIN_STR(MIN_PASSWORD_LENGTH))
    .default(''),
});

export const useLoginForm = () => {
  const dispatch = useDispatch();
  const isLoginLoading = useSelector(getIsLoginLoading);

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
  const onSubmit = async ({ email, password }) => {
    try {
      await dispatch(authOperations.loginUser({ email, password }));
      reset();
      /* Redirect to the main or private page */
    } catch {}
  };

  return {
    register,
    isLoading: isLoginLoading,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
