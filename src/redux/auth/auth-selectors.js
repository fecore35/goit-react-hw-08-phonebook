const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getLoading = (state) => state.auth.isLoader;

const getError = (state) => state.auth.error;

const getUserEmail = (state) => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getLoading,
  getError,
};

export default authSelectors;
