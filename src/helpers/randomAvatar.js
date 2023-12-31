import { avatars } from 'helpers/constants/avatars';

export const getRandomAvatarPath = () => {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randomIndex];
};
