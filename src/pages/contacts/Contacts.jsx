import { ContactForm } from '../../components/ContactForm/ContactForm';
import { FilterAndTable } from '../../components/App/FilterAndTable';

export default function Contacts({ data, isThemeDark }) {
  return (
    <div
      className="flex gap-4 sm:gap-0 justify-around mx-auto 
    w-11/12   p-14 md3:p-4 1xl2:mt-5 ssm:p-2 rounded shadow-xl
    md:flex-col md:items-center md:text-base md:px-1.5 md:w-11/12
    text-xl min-h-482 select-none 
    bg-gradient-to-tl 
      relative "
    >
      <ContactForm isThemeDark={isThemeDark} />
      <FilterAndTable data={data} isThemeDark={isThemeDark} />
    </div>
  );
}
