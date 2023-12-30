import { getRandomAvatarPath } from 'helpers/randomAvatar';

const handlePending = state => {
  return { ...state, isLoadingUser: true };
};

const handleRejected = state => {
  return { ...state, error: true, isLoadingUser: false };
};

const handleRegisterFulfilled = (state, action) => {
  if (action.payload && action.payload.user) {
    return {
      ...state,
      user: {
        name: action.payload.user?.name || '',
        number: action.payload.user?.number || '',
      },
      token: action.payload.token,
      avatar: getRandomAvatarPath(),
      isLoadingUser: false,
      isLoggedIn: true,
    };
  }
  return state;
};

const handleRegisterRejected = (state, action) => {
  return {
    ...state,
    isLoadingUser: false,
    user: {
      name: action.payload.user?.name || '',
      number: action.payload.user?.number || '',
    },
    token: null,
    isLoggedIn: false,
    error: true,
  };
};

const handleLoginFulfilled = (state, action) => {
  if (action.payload && action.payload.user) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoggedIn: true,
      avatar: getRandomAvatarPath(),
      isLoadingUser: false,
    };
  }
  return state;
};

const handleLogoutFulfilled = state => {
  return {
    ...state,
    isLoadingUser: false,
    user: {
      name: '',
      number: '',
    },
    token: null,
    isLoggedIn: false,
    avatar: '',
  };
};

const handleFetchCurrentUserFulfilled = (state, action) => {
  if (action.payload) {
    return {
      ...state,
      user: { ...action.payload },
      isLoadingUser: false,
      isLoggedIn: true,
    };
  }
  return state;
};

export {
  handlePending,
  handleRegisterFulfilled,
  handleRegisterRejected,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleFetchCurrentUserFulfilled,
  handleRejected,
};
