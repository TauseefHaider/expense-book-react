import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Setting() {
  let users = []; //geting data from local storage
  let userdata = localStorage.getItem("users");
  let activeuser = localStorage.getItem("activeUser");
  let activeUserData;
  const navigate = useNavigate();
  const [expenseCat, setExpenseCat] = useState();
  const [incomeCat, setIncomeCat] = useState();

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
      navigate("login");
    }
  }, [activeuser, navigate]);

  const [tableDataIn, setTableDataIn] = useState(activeUserData.Income);
  const [tableDataEx, setTableDataEx] = useState(activeUserData.Expense);

  const updateStorage = () => {
    const userData = {
      incomeCat,
    };
    const updatedUsers = users.map((user) => {
      if (incomeCat === "") {
        alert("Fileds are required");
      } else {
        setTableDataIn((prevStudents) => [...prevStudents, userData]);
        resetfields();
      }
      if (user.Email === activeuser) {
        const updatedUser = {
          ...user,
          Income: [...user.Income, userData], // Append new transaction to existing transactions
        };
        return updatedUser;
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  const updateStorageEx = () => {
    const userData = {
      expenseCat,
    };
    const updatedUsers = users.map((user) => {
      if (expenseCat === "") {
        alert("Fileds are required");
      } else {
        setTableDataEx((prevStudents) => [...prevStudents, userData]);
        resetfieldsex();
      }
      if (user.Email === activeuser) {
        const updatedUser = {
          ...user,
          Expense: [...user.Expense, userData], // Append new transaction to existing transactions
        };
        return updatedUser;
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  const resetfields = () => {
    setIncomeCat("");
  };
  const resetfieldsex = () => {
    setExpenseCat("");
  };
  return (
    <>
      <section className="bg-[#404040] flex flex-col items-center w-full">
        <div className="flex flex-col lg:flex-row justify-center gap-4 mt-10 mr-2">
          <div className="ml-4 flex flex-col bg-slate-300 text-black py-6 md:p-6 rounded-md">
            <div className="flex items-center gap-4">
              <input
                type="text"
                id="income-category"
                value={incomeCat}
                onChange={(e) => setIncomeCat(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-md w-[200px] text-black p-2.5 focus:border-2 focus:border-black text-center"
                placeholder="Add Income category"
                required
              />
            </div>
            <button
              id="add-income-category"
              onClick={updateStorage}
              className="border p-2 rounded-md w-[120px] self-center mt-6 bg-[#51d289] hover:bg-[#1f9e56] hover:text-slate-100"
            >
              Add
            </button>
            <div>
              <table
                id="income-category-table"
                className="table-auto text-center text-xl mt-6"
              >
                <th>Income Categories</th>
                <tbody>
                  {tableDataIn.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.incomeCat}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Salary</td>
                  </tr>
                  <tr>
                    <td>Bonus</td>
                  </tr>
                  <tr>
                    <td>Commission</td>
                  </tr>
                  <tr>
                    <td>Gift</td>
                  </tr>
                  <tr>
                    <td>Others</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="ml-4 flex flex-col bg-slate-300 text-black py-6 md:p-6 rounded-md">
            <div className="flex items-center gap-4">
              <input
                type="text"
                id="expense-category"
                value={expenseCat}
                onChange={(e) => setExpenseCat(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-md w-[200px] text-black p-2.5 focus:border-2 focus:border-black text-center"
                placeholder="Add Expense category"
                required
              />
            </div>
            <button
              id="add-expense-category"
              onClick={updateStorageEx}
              className="border p-2 rounded-md w-[120px] self-center mt-6 bg-[#51d289] hover:bg-[#1f9e56] hover:text-slate-100"
            >
              Add
            </button>
            <div>
              <table
                id="expense-category-table"
                className="table-auto text-center text-xl mt-6 "
              >
                <th>Expense Categories</th>

                <tbody>
                  {tableDataEx.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.expenseCat}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Shopping</td>
                  </tr>
                  <tr>
                    <td>Utility</td>
                  </tr>
                  <tr>
                    <td>Food</td>
                  </tr>
                  <tr>
                    <td>Petrol</td>
                  </tr>
                  <tr>
                    <td>Others</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Setting;
