import { getRandomAvatarPath } from 'helpers/randomAvatar';

const handlePending = state => {
  return { ...state, isLoading: true };
};

const handleRejected = state => {
  return { ...state, isLoading: false };
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
      isLoading: false,
      isLoggedIn: true,
    };
  }
  return state;
};

const handleRegisterRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
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
      isLoading: false,
    };
  }
  return state;
};

const handleLogoutFulfilled = (state, action) => {
  return {
    ...state,
    isLoading: false,
    user: '',
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
      isLoading: false,
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
