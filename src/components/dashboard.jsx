import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let users = []; //geting data from local storage
  let userdata = localStorage.getItem("users");
  let activeuser = localStorage.getItem("activeUser");
  let activeUserData;
  const navigate = useNavigate();
  const [incomeDiv, setIncomeDive] = useState(true);
  const [expenseDiv, setExpenseDive] = useState(false);
  const [money, setMoney] = useState();
  const [cat, setCat] = useState("Not Categorized");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [note, setNote] = useState("");

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

  const [tableData, setTableData] = useState(activeUserData.transData);

  const handleSaveIncome = () => {
    const userData = {
      money,
      cat,
      date,
      note,
      type: "Income",
      delete: "Delete",
    };

    if (note === "" || money === "") {
      alert("Fileds are required");
    } else {
      setTableData((prevStudents) => [...prevStudents, userData]);
      resetfields();

      const updateStorage = () => {
        const updatedUsers = users.map((user) => {
          if (user.Email === activeuser) {
            const updatedUser = {
              ...user,
              transData: [...user.transData, userData], // Append new transaction to existing transactions
            };
            return updatedUser;
          }
          return user;
        });
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      };
    }
  };

  const resetfields = () => {
    setNote("");
    setMoney("");
    setCat("Salary");
  };

  const handleSaveExpense = () => {
    const userData = {
      money,
      cat,
      date,
      note,
      type: "Expense",
      delete: "Delete",
    };

    if (note === "" || money === "") {
      alert("Fileds are required");
    } else {
      setTableData((prevStudents) => [...prevStudents, userData]);
      resetfields();
      const updateStorage = () => {
        const updatedUsers = users.map((user) => {
          if (user.Email === activeuser) {
            const updatedUser = {
              ...user,
              transData: [...user.transData, userData], // Append new transaction to existing transactions
            };
            return updatedUser;
          }
          return user;
        });
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      };
    }
  };

  return (
    <>
      <section className="bg-[#404040] flex flex-col  items-center w-full gap-10">
        <div className="bg-[#404040] w-full md:w-[calc(100%-200px)] lg:flex grid pt-10 justify-center gap-20">
          {/* <!-- Percentage Circle --> */}
          {/* <div
            class="bg-white rounded-md h-[500px] w-[300px] md:w-[350px] lg:w-[350px] md:p-[30px] gap-7 text-black flex flex-col justify-center items-center"
          >
            <div
              id="progress-circle"
              class="md:h-[250px] md:w-[250px] h-[180px] w-[180px] rounded-full flex items-center justify-center"
              style="background: conic-gradient(#51d289 3.5deg, #ededed 0deg)"
            >
              <div
                class="h-[150px] w-[150px] md:h-[210px] md:w-[210px] bg-white rounded-full flex flex-col items-center justify-center"
              >
                <div>
                  <span
                    id="progress-percent"
                    class="text-2xl font-bold text-[#51d289]"
                    >0</span
                  ><span class="text-2xl font-bold text-[#51d289]">%</span>
                </div>
                <span class="text-xl text-[#51d289]">Spent</span>
              </div>
            </div>

            <div class="flex gap-10">
              <div
                class="flex flex-col items-center bg-[#2b2b2b] text-slate-100 p-1 px-2 rounded-md"
              >
                <p>Available</p>
                <p class="text-[#51d289]">00</p>
              </div>
              <div
                class="flex flex-col items-center bg-[#2b2b2b] text-slate-100 p-1 px-5 rounded-md"
              >
                <p>Spent</p>
                <p class="text-[#ffe600]">00</p>
              </div>
            </div>
          </div>  */}
          {/* <!-- Input --> */}
          <div className="bg-white rounded-md h-[500px] w-[300px] md:w-[350px] lg:w-[350px] md:p-[30px] gap-7 text-black flex flex-col">
            <div className="flex flex-col items-center">
              <div className="flex w-full bg-gray-200 rounded-md mt-5">
                <button
                  onClick={() => {
                    setIncomeDive(true);
                    setExpenseDive(false);
                  }}
                  className="flex-col-1 w-full rounded-l-md border-r-black hover:bg-gray-500 py-2 hover:text-slate-200"
                >
                  Income
                </button>
                <button
                  onClick={() => {
                    setExpenseDive(true);
                    setIncomeDive(false);
                  }}
                  className="flex-span-1 w-full rounded-r-md border-l-2 border-l-black hover:bg-gray-500 py-2 hover:text-slate-200"
                >
                  Expense
                </button>
              </div>

              {incomeDiv ? (
                <div id="income-input">
                  <div className="flex">
                    <div className="flex flex-col mt-12 gap-11 ml-1">
                      <p>Income:</p>
                      <p>Source:</p>
                      <p className="mt-2">Date:</p>
                      <p>Note:</p>
                    </div>

                    <div className="flex flex-col mt-10 ml-3 mr-2 gap-5">
                      <input
                        type="number"
                        value={money}
                        className="bg-gray-100 border-2 w-[200px] border-gray-300 rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
                        placeholder=""
                        onChange={(e) => setMoney(e.target.value)}
                        required
                      />

                      <select
                        id="selectValue-income"
                        name="selectValue"
                        onChange={(e) => setCat(e.target.value)}
                        value={cat}
                        className="border-2 border-gray-300 rounded-md w-[200px] text-black p-2.5 focus:border-2 focus:border-black text-center"
                      >
                        <option>Not Categorized</option>
                        <option>Salary</option>
                        <option>Bonus</option>
                        <option>Commission</option>
                      </select>

                      <input
                        type="date"
                        value={date}
                        className="bg-gray-100 border-2 border-gray-300 rounded-md w-[200px] text-black p-2.5 focus:border-2 focus:border-black text-center"
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        value={note}
                        className="bg-gray-100 border-2 border-gray-300 rounded-md w-[200px] text-black p-2.5 focus:border-2 focus:border-black text-center"
                        placeholder=""
                        onChange={(e) => setNote(e.target.value)}
                        required
                      />

                      <button
                        id="save-income"
                        onClick={handleSaveIncome}
                        className="border p-2 rounded-md w-[120px] self-center mt-6 bg-[#51d289] hover:bg-[#1f9e56] hover:text-slate-100"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
              {expenseDiv ? (
                <div id="expense-input">
                  <div className="flex">
                    <div className="flex flex-col mt-12 gap-11 ml-1">
                      <p>Spend:</p>
                      <p>Where:</p>
                      <p className="mt-2">Date:</p>
                      <p>Note:</p>
                    </div>

                    <div className="flex flex-col mt-10 ml-3 mr-4 gap-5">
                      <input
                        type="number"
                        value={money}
                        className="bg-gray-100 border-2 w-[200px] border-gray-300 rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
                        placeholder=""
                        onChange={(e) => setMoney(e.target.value)}
                        required
                      />
                      <select
                        id="selectValue-expense"
                        name="selectValue"
                        value={cat}
                        onChange={(e) => setCat(e.target.value)}
                        className="border-2 border-gray-300 w-[200px] rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
                      >
                        <option>Not Categorized</option>
                        <option>Shopping</option>
                        <option>Utility</option>
                        <option>Food</option>
                      </select>

                      <input
                        type="date"
                        value={date}
                        className="bg-gray-100 border-2 w-[200px] border-gray-300 rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        id="expense-note-input"
                        value={note}
                        className="bg-gray-100 border-2 border-gray-300 rounded-md w-[200px] text-black p-2.5 focus:border-2 focus:border-black text-center"
                        placeholder=""
                        onChange={(e) => setNote(e.target.value)}
                        required
                      />

                      <button
                        id="save-expense"
                        onClick={handleSaveExpense}
                        className="border p-2 rounded-md w-[120px] self-center mt-6 bg-[#51d289] hover:bg-[#1f9e56] hover:text-slate-100"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/* <!-- < table> --> */}
        <div className="p-2 bg-[#2b2b2b] rounded-md lg:w-[700px] mb-10">
          <table id="dataTable" className="table-auto border-collapse border">
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
            <tbody>
              {tableData.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.type}</td>
                    <td>{user.money}</td>
                    <td>{user.cat}</td>
                    <td>{user.date}</td>
                    <td>{user.note}</td>
                    <td>
                      <button>{user.delete}</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      ;
    </>
  );
}

export default Home;
