import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterValue } from '../../redux/redux-bundle/filterSlice';
import { getFilterValue, getTheme } from '../../redux/redux-bundle/selectors';
import { TbUserSearch } from 'react-icons/tb';

export function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const isThemeDark = useSelector(getTheme);

  const handleInputChange = event => {
    const value = event.target.value;
    dispatch(changeFilterValue(value));
  };

  return (
    <label
      className={`${
        isThemeDark ? 'bg-tableHeaderBackgroundDark' : 'bg-filterLabelColor'
      }  w-[60%] mx-auto mb-2 
    mt-5 py-1 px-5 rounded-0.5 flex md:w-[85%] md:text-3 md:py-1
    md:px-2 md2:w-[85%] transition-all relative`}
    >
      <TbUserSearch
        className={`
        absolute w-4 h-4 opacity-40 top-3.5 left-9 1xl2:left-12
        z-10 ${
          !isThemeDark
            ? ' text-filterPlaceholderColor '
            : ' text-filterPlaceholderColorDark '
        } 
        md:w-5 md:h-5 
        ssm:hidden   transition-all `}
      />
      <input
        placeholder="Enter name for filter"
        type="text"
        value={filterValue}
        onChange={handleInputChange}
        className={`${
          isThemeDark
            ? ' bg-sky-900 text-darkFontDark placeholder:text-filterPlaceholderColorDark '
            : 'bg-lightPartsColor text-darkFont placeholder:text-filterPlaceholderColor  '
        }placeholder:opacity-50 flex text-m border-none outline-none w-11/12 max-w-[480px]
         h-10 rounded mx-auto opacity-70 text-center py-0.5 pr-2 pl-5 placeholder:text-center 
         placeholder:py-1 placeholder:px-5 md:w-[90%] 
          md:pl-10 ssm:pl-1 text-xl placeholder:font-light font-light transition-all`}
      />
    </label>
  );
}
