export default function NoPage() {
  return (
    <div className="select-none flex justify-center mt-24 h-[80vh] ">
      <div
        style={{
          backgroundImage:
            'url(https://i.pinimg.com/474x/cd/4d/8b/cd4d8b6cbfe89bd196d25416d38c31ae.jpg)',
        }}
        className="select-none bg-left-[20%] bg-repeat w-[600px] h-[230px] relative flex flex-col items-center justify-center text-center rounded "
      >
        <img
          className="mt-32"
          src="https://i.pinimg.com/474x/cd/4d/8b/cd4d8b6cbfe89bd196d25416d38c31ae.jpg"
          alt="noSignal"
        />
        <p className="text-lg font-pixel text-center m-0 bg-black px-2 ">
          Page not found
        </p>
        <h1 className="font-errorFont text-[200px] select-none font-extrabold p-0 mt-4">
          404
        </h1>
      </div>
    </div>
  );
}
