import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { PulseLoader } from 'react-spinners';
import normalizePhoneNumber from 'helpers/numberNormalize';
import { getTheme } from '../../../redux/redux-bundle/selectors';
import { ModalFordelete } from './ModalForDelete';
import { useState } from 'react';
import { useDeleteContactMutation } from '../../../redux/rtk-apiService/rtkq-api';

export function ContactTableItem({ contact, index, data }) {
  const isThemeDark = useSelector(getTheme);
  const windowWidth = window.innerWidth;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = id => {
    deleteContact(id);
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <tr
      className={`${
        isThemeDark
          ? ' border-tableBorderColorDark '
          : ' border-tableBorderColor '
      }border-b-2  `}
    >
      <td
        width="5%"
        className={`${
          isThemeDark ? ' bg-lightPartsColorDark ' : ' bg-lightPartsColor '
        }p-1 text-cente `}
      >
        {index + 1}
      </td>
      <td
        width="44%"
        className={`${
          isThemeDark ? ' bg-lightPartsColorDark ' : ' bg-lightPartsColor '
        }p-1 text-center   md:text-md ssm:text-[12px]  `}
      >
        {contact.name}
      </td>
      <td
        width="42%"
        className={`${
          isThemeDark ? ' bg-lightPartsColorDark ' : ' bg-lightPartsColor '
        }p-1 text-center   md:text-md ssm:text-[12px] `}
      >
        {normalizePhoneNumber(contact.phone)}
      </td>
      <td
        width="15%"
        className={`${
          isThemeDark ? ' bg-lightPartsColorDark ' : ' bg-lightPartsColor '
        } p-1 text-center   md:text-md ssm:text-sm  pr-3 1xl2:pr-5`}
      >
        <button
          id="delete-btn"
          onClick={openModal}
          disabled={isDeleting}
          className={` ${
            isThemeDark
              ? ' bg-buttonColorDark hover:bg-buttonHoverColorDark text-lightPartsColorDark hover:text-darkFontDark'
              : ' bg-buttonColor hover:bg-buttonHoverColor text-lightPartsColor '
          } mx-auto border-none
           py-1 px-2 min-w-[50px] min-h-[28px] text-xs cursor-pointer 
           duration-300 flex text-center items-center 
            rounded-sm font-light justify-center sm:min-h-[20px] sm:min-w-[30px]`}
        >
          {isDeleting ? (
            <PulseLoader color="#F5DEB3" size="2px" />
          ) : windowWidth < 768 ? (
            <AiOutlineUserDelete style={{ marginRight: '4px' }} />
          ) : (
            'Delete'
          )}
        </button>
      </td>
      <ModalFordelete
        isThemeDark={isThemeDark}
        contact={contact}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleDelete={handleDelete}
      />
    </tr>
  );
}

const ContactType = {
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

ContactTableItem.propTypes = {
  contact: PropTypes.shape(ContactType).isRequired,
  index: PropTypes.number,
};
