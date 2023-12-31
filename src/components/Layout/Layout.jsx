import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/selectors';
import { Header } from './Header.jsx';
import { SuspenseLoader } from '../SuspenseLoader/SuspenseLoader.jsx';

export default function Layout() {
  const isThemeDark = useSelector(getTheme);
  return (
    <div
      className={`${
        isThemeDark
          ? ' text-darkFontDark from-gradientColor1Dark to-gradientColor2Dark '
          : ' text-darkFont  from-gradientColor1 to-gradientColor2 '
      }
    flex gap-0 sm:gap-0  md3:pt-5 justify-around mx-auto 
    w-12/12   pt-0  rounded shadow-xl
    flex-col md:items-center md:text-base
    text-xl min-h-[100vh] select-none 
    bg-gradient-to-tr 
     transition-all relative -z-1 ssm2:w-12/12 ssm2:p-0 ssm2:m-0`}
    >
      <Header />
      <main className="w-full ssm:mt-6 md:mt-20 md3:mt-12 relative ">
        <Suspense fallback={<SuspenseLoader isThemeDark={isThemeDark} />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
