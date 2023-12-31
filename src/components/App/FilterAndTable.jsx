import { ContactTable } from 'components/ContactTable/ContactTable';
import { Filter } from 'components/Filter/Filter';

export const FilterAndTable = ({ data, isThemeDark }) => {
  return (
    <div
      className={`${
        isThemeDark
          ? ' shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark '
          : ' shadow-shadowBox from-smallWraperGradient1 to-smallWraperGradient2 '
      } 
      w-8/12 flex justify-center items-center flex-col
      px-5 pr-4 rounded-sm shadow-lg min-h-562 ssm:min-h-762
      select-none bg-gradient-to-tr
      relative md:mt-3 md:pt-0 md:pb-7 md:px-1 md2:px-2 md:w-11/12
      transition-all ssm2:w-full ssm2:p-0 ssm2:mt-2`}
    >
      <Filter />
      <ContactTable data={data} />
    </div>
  );
};
