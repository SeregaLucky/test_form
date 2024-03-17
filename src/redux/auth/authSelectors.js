const getAuth = (state) => state.authReducer;

export const getIsLoginLoading = (state) => getAuth(state).isLoginLoading;
