import strangeStone from '../../img/stone.webp';
import strangeStoneYellow from '../../img/stone-yellow.webp';
import { HomePageShine } from 'components/Shine/HomePageShine';

export default function HomePage({ isThemeDark }) {
  return (
    <div className="md:mt-[72px] ssm:mt-[22px]">
      {isThemeDark ? (
        <div
          className="h-[92vh] mt-100 w-[100%]  bg-cover bg-center bg-no-repeat bg-custom-class flex  -z-30 "
          style={{
            backgroundImage: `url(${strangeStone})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }}
        >
          <h1 className=" text-blue-300 md:text-6xl md3:text-9xl self-end md:mb-12 md:ml-8 md3:mb-32 md3:ml-20">
            HOME PAGE
          </h1>
        </div>
      ) : (
        <div
          className="h-[92vh] mt-100  bg-cover bg-center bg-no-repeat bg-custom-class flex -z-30"
          style={{
            backgroundImage: `url(${strangeStoneYellow})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <h1 className=" text-yellow-200 md:text-6xl md3:text-9xl self-end md:mb-12 md:ml-8 md3:mb-32 md3:ml-20">
            HOME PAGE
          </h1>
        </div>
      )}
      <HomePageShine isThemeDark={isThemeDark} />
    </div>
  );
}
