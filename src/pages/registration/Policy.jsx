import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getTheme, getError } from '../../redux/redux-bundle/selectors';

export const Policy = () => {
  const error = useSelector(getError);
  const isThemeDark = useSelector(getTheme);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div className="mt-10 w-full max-w-[500px] mx-auto flex relative">
      <input
        className={`${
          isThemeDark
            ? 'border-none checked:bg-lightPartsColorDark bg-sky-700'
            : 'border-darkFont checked:bg-buttonColor bg-lightPartsColor'
        } mr-4 mt-1   appearance-none rounded border checked:border-transparent
        focus:outline-none`}
        style={{ flex: 'none', width: '24px', height: '24px' }}
        name="user-privacy"
        type="checkbox"
        id="user-privacy"
        value="true"
        required
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked && !error && (
        <span className="absolute top-1.5 left-0.5 pointer-events-none p-0.5 w-full">
          <FaCheck size={16} className="pointer-events-none" />
        </span>
      )}

      <label htmlFor="user-privacy">
        I accept the terms and conditions of the{' '}
        <a
          className={`${isThemeDark ? 'text-teal-400' : 'text-teal-600'} ml-2`}
          href="/"
          target="_blank"
        >
          Privacy Policy
        </a>
      </label>
    </div>
  );
};
