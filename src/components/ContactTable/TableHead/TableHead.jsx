export const TableHead = ({ isThemeDark }) => {
  return (
    <thead className="text-sm  right-0 left-0 top-0 w-full ">
      <tr
        className={`${
          isThemeDark
            ? 'border-tableBorderColorDark '
            : 'border-tableBorderColor '
        } border-b-2  `}
      >
        <th
          width="7%"
          className={`${
            isThemeDark
              ? 'bg-tableHeaderBackgroundDark  text-darkFontDark '
              : 'bg-tableHeaderBackground text-darkFont '
          } items-center  
           font-bold min-w-4 p-2 md:p-0.5 `}
        >
          #
        </th>
        <th
          width="40%"
          className={`${
            isThemeDark
              ? 'bg-tableHeaderBackgroundDark text-darkFontDark '
              : 'bg-tableHeaderBackground text-darkFont '
          } items-center 
           font-bold min-w-4 p-2 md:p-0.5  `}
        >
          Name
        </th>
        <th
          width="42%"
          className={`${
            isThemeDark
              ? 'bg-tableHeaderBackgroundDark text-darkFontDark '
              : 'bg-tableHeaderBackground text-darkFont '
          }items-center  
           font-bold min-w-4 p-2 md:p-0.5  `}
        >
          Phone Number
        </th>
        <th
          width="15%"
          className={`${
            isThemeDark
              ? 'bg-tableHeaderBackgroundDark  text-darkFontDark '
              : ' bg-tableHeaderBackground text-darkFont '
          }items-center  
           font-bold min-w-4 p-2 md:p-0.5  pr-3 1xl2:pr-5 `}
        >
          Action
        </th>
      </tr>
    </thead>
  );
};
