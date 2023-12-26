import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ContactTableItem } from './ContactTableItem/ContactTableItem';
import { useGetAllContactsQuery } from '../../redux/rtk-apiService/rtkq-api';
import { getFilterValue, getTheme } from '../../redux/redux-bundle/selectors';
import { TableHead } from './TableHead/TableHead';

export function ContactTable() {
  const { data, error, isLoading } = useGetAllContactsQuery();
  const filter = useSelector(getFilterValue);
  const isThemeDark = useSelector(getTheme);

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    if (!Array.isArray(data)) {
      return [];
    }

    const filteredContacts = data.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.phone.toLowerCase().includes(normalizedFilter)
    );
    const sortedContacts = [...filteredContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    return sortedContacts;
  }, [data, filter]);

  return (
    <div className="overflow-x-auto w-[92%]">
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
        mt-5 mb-5 block mx-auto overflow-auto w-full h-[534px] 
        ssm:text-xs `}
      >
        <TableHead isThemeDark={isThemeDark} />
        <tbody className="max-h-fit max-w-full text-xl sm:text-sm md2:text-sm ssm:text-xs  select-text">
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
