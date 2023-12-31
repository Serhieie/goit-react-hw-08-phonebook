import { avatars } from 'constants/avatars';

export const getRandomAvatarPath = () => {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randomIndex];
};
