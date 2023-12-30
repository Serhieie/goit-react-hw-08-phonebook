import { HomePageShine } from 'components/Shine/HomePageShine';
import { Helmet } from 'react-helmet';

export default function HomePage({ isThemeDark, name }) {
  return (
    <div className="md:mt-[54px] ssm:mt-[48px] w-full">
      <Helmet>
        <title>Sweet-Home</title>
      </Helmet>
      {isThemeDark ? (
        <div
          className={` bg-strange-stone md:bg-mobile-strange-stone h-[92vh] w-[100%] bg-cover bg-center bg-no-repeat bg-custom-class flex -z-30`}
          style={{
            backgroundPosition: 'center top',
            backgroundSize: 'cover', // Змінений розмір фону
          }}
        >
          <h1
            style={{ WebkitBackgroundClip: 'text', color: 'transparent' }}
            className=" font-bigFont bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  ssm:text-7xl  md:text-8xl md3:text-9xl self-end  md:mb-32 md:ml-9 md3:mb-4 md3:ml-16"
          >
            {`WELCOME  ${name}`}
          </h1>
        </div>
      ) : (
        <div
          className={`h-[92vh]  bg-yellow-strange-stone md:bg-mobile-yellow-strange-stone  mt-100 bg-cover bg-center bg-no-repeat bg-custom-class flex -z-30`}
          style={{
            backgroundPosition: 'center top',
            backgroundSize: 'cover', // Змінений розмір фону
          }}
        >
          <h1
            style={{ WebkitBackgroundClip: 'text', color: 'transparent' }}
            className=" font-bigFont bg-gradient-to-r from-amber-200 from-10% via-orange-400 via-30% to-yellow-600 to-90% ssm:text-7xl  md:text-8xl md3:text-9xl self-end md:mb-32 md:ml-8 md3:mb-24 md3:ml-40"
          >
            {`WELCOME  ${name}`}
          </h1>
        </div>
      )}
      <HomePageShine isThemeDark={isThemeDark} />
    </div>
  );
}
