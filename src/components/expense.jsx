import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Expense() {
  let users = []; //geting data from local storage
  let userdata = localStorage.getItem("users");
  let activeuser = localStorage.getItem("activeUser");
  let activeUserData;
  const navigate = useNavigate();

  if (userdata) {
    users = JSON.parse(userdata);
  }
  //storing active user data in veriables
  users.find((user) => {
    user.Email === activeuser;
    activeUserData = user;
  });

  //checking authentication if user is not active redirecting to signin page
  useEffect(() => {
    if (!activeuser) {
      navigate("/login");
    }
  }, [activeuser, navigate]);

  useEffect(() => {});

  return (
    <>
      <section className=" bg-[#404040] flex flex-col  items-center w-full gap-14">
        <div className="flex flex-col mt-10 ml-3 mr-2 gap-7">
          <p className="self-center text-xl md:text-2xl font-bold text-stone-200">
            Expense
          </p>
          <input
            type="number"
            id="txtexpense-input"
            className="bg-gray-100 border-2 border-gray-300 md:w-[400px] w-[200px] rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
            placeholder="Add Expense"
            required
          />
          <select
            id="selectValue-expense"
            name="selectValue"
            className="bg-gray-100 border-2 border-gray-300 md:w-[400px] w-[200px] rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
          >
            <option>Not Categorized</option>
            <option>Shopping</option>
            <option>Utility</option>
            <option>Food</option>
          </select>

          <input
            type="date"
            id="expense-date-input"
            className="bg-gray-100 border-2 border-gray-300 md:w-[400px] w-[200px] rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
            placeholder=""
            required
          />
          <input
            type="text"
            id="expense-note-input"
            className="bg-gray-100 border-2 border-gray-300 md:w-[400px] w-[200px] rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
            placeholder="Add Note"
            required
          />

          <button
            id="save-expense"
            className="border p-2 rounded-md w-[120px] self-center text-black mt-6 bg-[#51d289] hover:bg-[#1f9e56] hover:text-slate-100"
          >
            Save
          </button>
        </div>
        <div className="p-2 bg-[#2b2b2b] rounded-md lg:w-[700px] mb-10">
          <table
            id="dataTableExpense"
            className="table-auto border-collapse border"
          >
            <thead>
              <tr>
                <th className="border p-1">Type</th>
                <th className="border p-1">Amount</th>
                <th className="border p-1">Category</th>
                <th className="border p-1">Date</th>
                <th className="border p-1">Note</th>

                <th className="border p-1">Delete</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Expense;
