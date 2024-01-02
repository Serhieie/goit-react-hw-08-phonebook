import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ContactTableItem } from './ContactTableItem/ContactTableItem';
import { getFilterValue, getTheme } from '../../redux/selectors';
import { TableHead } from './TableHead/TableHead';
import PropTypes from 'prop-types';

export function ContactTable({ data, error, isLoading }) {
  const filter = useSelector(getFilterValue);
  const isThemeDark = useSelector(getTheme);

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    //next step we have arrey operations so we need to check is it arrey or...
    if (!Array.isArray(data)) {
      return [];
    }

    //filter by name or phone
    const filteredContacts = data.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );

    //all contacts will go trough A-Z sort
    const sortedContacts = [...filteredContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    return sortedContacts;
  }, [data, filter]);

  return (
    <div className="overflow-x-auto  w-[92%] ssm2:w-12/12 ssm2:p-0 ssm2:m-0 ssm2:pb-10 ">
      <div className="h-6">
        {isLoading && !data && (
          <p className="text-center font-light text-xs">Loading...</p>
        )}

        {!isLoading && data && data.length === 0 && (
          <p className="text-center font-light text-base">No contacts found.</p>
        )}

        {error && (
          <p className="text-center font-light text-base">
            Error fetching contacts. Please try again later.
          </p>
        )}
      </div>

      <table
        className={`${
          isThemeDark
            ? 'border-tableBorderColorDark '
            : 'border-tableBorderColor '
        } border-2  border-collapese 
        mt-5 mb-5 block mx-auto overflow-auto w-full h-[490px] 
         ssm2:w-12/12 ssm2:p-0 ssm2:m-0 ssm2:text-base`}
      >
        <TableHead isThemeDark={isThemeDark} />
        <tbody className="max-h-fit max-w-full  text-xl ssm:text-base    ssm2:text-lg  1xl2:text-2xl">
          {!error &&
            getVisibleContacts.map((contact, index) => (
              <ContactTableItem
                key={contact.id}
                contact={contact}
                index={index}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

ContactTable.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};
