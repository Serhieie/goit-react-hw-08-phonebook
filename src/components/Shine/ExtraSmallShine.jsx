import React from 'react';

// Функція генерування випадкового числа у заданому діапазоні
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Функція генерування випадкового кольору у форматі HEX
const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const ExtraSmallShine = ({ isThemeDark, left, top, blurSize }) => {
  const colorLight = getRandomColor();

  const gradientClasses = {
    red: ['from-red-300', 'to-red-900'],
    orange: ['from-orange-300', 'to-orange-900'],
    amber: ['from-amber-300', 'to-amber-900'],
    yellow: ['from-yellow-300', 'to-yellow-900'],
    lime: ['from-lime-300', 'to-lime-900'],
    green: ['from-green-300', 'to-green-800'],
    emerald: ['from-emerald-300', 'to-emerald-800'],
    teal: ['from-teal-300', 'to-teal-800'],
    sky: ['from-sky-300', 'to-sky-800'],
    blue: ['from-blue-300', 'to-blue-800'],
    indigo: ['from-indigo-300', 'to-indigo-800'],
    violet: ['from-violet-300', 'to-violet-900'],
    purple: ['from-purple-300', 'to-purple-800'],
    fuchsia: ['from-fuchsia-300', 'to-fuchsia-800'],
    pink: ['from-pink-300', 'to-pink-900'],
    rose: ['from-rose-300', 'to-rose-900'],
  };

  const colorKeys = Object.keys(gradientClasses);
  const randomColorKey =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];
  const randomGradientClasses = gradientClasses[randomColorKey];

  return (
    <>
      <div
        className={`pointer-events-none w-10 h-10 bg-transparent 
        bg-opacity-50  rounded-lg blur-sm absolute
        z-0 ssm:hidden`}
        style={{ left: `${left}px`, top: `${top}px` }}
      >
        <div
          className={`${
            isThemeDark
              ? `${randomGradientClasses[0]} ${randomGradientClasses[1]}`
              : `${randomGradientClasses[0]} ${randomGradientClasses[1]}`
          }absolute top-1/2 left-1/2 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-b animate-shine blur-sm rounded-full pointer-events-none`}
        ></div>
      </div>
    </>
  );
};

const blurSizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'];

const generateExtraSmallShines = (count, isThemeDark) => {
  const shines = [];
  const maxWidth = window.innerWidth - 120;
  const maxHeight = window.innerHeight - 120; // Зменшено максимальну висоту, щоб не генерувати за межами нижньої частини екрану

  for (let i = 0; i < count; i += 1) {
    const randomBlurIndex = getRandomNumber(0, blurSizes.length - 1);
    const blurSize = blurSizes[randomBlurIndex];

    let left = getRandomNumber(0, maxWidth);
    let top = getRandomNumber(0, maxHeight);

    // Додаткові перевірки для того, щоб не виходити за межі екрану знизу
    if (left + 90 > window.innerWidth) {
      left = window.innerWidth - 199;
    }
    if (top + 90 > window.innerHeight) {
      top = window.innerHeight - 400;
    }

    shines.push(
      <ExtraSmallShine
        key={i}
        isThemeDark={isThemeDark}
        left={left}
        top={top}
        blurSize={blurSize}
      />
    );
  }
  return shines;
};

export { generateExtraSmallShines };
