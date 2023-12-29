import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { PulseLoader } from 'react-spinners';

export const Main = () => {
  return (
    <main className="w-full mt-12 relative ">
      <Suspense fallback={<PulseLoader color="#F5DEB3" size="22px" />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
