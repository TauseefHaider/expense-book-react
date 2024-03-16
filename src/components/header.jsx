import img1 from "./assets/profile-pic.png";

function Head() {
  return (
    <>
      <header className="bg-[#2b2b2b] w-full sticky top-0 md:h-[110px]">
        <div className="text-slate-100 p-3 md:p-6 lg:px-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div id="toggle" className="md:hidden cursor-pointer">
              <span className="material-symbols-outlined"> menu </span>
            </div>
            <div>
              <p className="md:text-lg lg:text-2xl font-bold">
                EXPENSE <span className="text-[#51d289] ml-1">BOOK</span>
              </p>
              <p className="text-xs">Track, save, conquer.</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <img className="w-8 rounded-full" src={img1} alt="" />
            <div>
              <p id="user-name" className="md:text-lg">
                Your Name
              </p>
            </div>
          </div>
        </div>
        <hr className="mx-5 pb-4" />
      </header>
    </>
  );
}

export default Head;
