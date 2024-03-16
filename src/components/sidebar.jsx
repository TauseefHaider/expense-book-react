import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="md:flex md:flex-col h-[calc(100vh-110px)] pl-5 justify-between hidden bg-[#2b2b2b] w-[200px] text-slate-100 text-base font-bold py-10 gap-8 fixed top-[110px]">
        <div className="flex flex-col gap-7">
          <NavLink
            to="dashboard"
            className="flex gap-3 cursor-pointer items-center hover:text-[#51d289] hover:bg-[#404040] p-2 rounded-md mr-1"
          >
            <span className="material-symbols-outlined"> dashboard </span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="income"
            className="flex gap-3 cursor-pointer items-center hover:text-[#51d289] hover:bg-[#404040] p-2 rounded-md mr-1"
          >
            <span className="material-symbols-outlined"> savings </span>

            <span>Income</span>
          </NavLink>

          <NavLink
            to="expense"
            className="flex gap-3 cursor-pointer items-center hover:text-[#51d289] hover:bg-[#404040] p-2 rounded-md mr-1"
          >
            <span className="material-symbols-outlined"> payments </span>
            <span>Expenses</span>
          </NavLink>

          <NavLink
            to="categories"
            className="flex gap-3 cursor-pointer items-center hover:text-[#51d289] hover:bg-[#404040] p-2 rounded-md mr-1"
          >
            <span className="material-symbols-outlined"> calculate </span>
            <span>Categories</span>
          </NavLink>

          <NavLink
            to="setting"
            className="flex gap-3 cursor-pointer items-center hover:text-[#51d289] hover:bg-[#404040] p-2 rounded-md mr-1"
          >
            <span className="material-symbols-outlined"> settings </span>
            <span>Setting</span>
          </NavLink>
        </div>
        <div className="flex flex-col gap-5">
          <NavLink
            to="profile"
            className="flex gap-3 cursor-pointer items-center hover:text-[#51d289] hover:bg-[#404040] p-2 rounded-md mr-1"
          >
            <span className="material-symbols-outlined"> person </span>
            <span>Profile</span>
          </NavLink>

          <div className="flex gap-3 items-center cursor-pointer hover:text-[#51d289] hover:bg-[#404040] p-2 rounded-md mr-1">
            <span className="material-symbols-outlined"> logout </span>
            <span>Logout</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
