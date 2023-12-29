import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Main = () => {
  return (
    <main className="w-full mt-12 relative ">
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
