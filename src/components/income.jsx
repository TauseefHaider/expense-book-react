import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Income() {
  let users = []; //geting data from local storage
  let userdata = localStorage.getItem("users");
  let activeuser = localStorage.getItem("activeUser");
  let activeUserData;
  const navigate = useNavigate();
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
      navigate("login");
    }
  }, [activeuser, navigate]);

  const [tableData, setTableData] = useState(activeUserData.transData);

  const updateStorage = () => {
    const userData = {
      money,
      cat,
      date,
      note,
      type: "Income",
      delete: "Delete",
    };
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
      updateStorage();
    }
  };

  const resetfields = () => {
    setNote("");
    setMoney("");
    setCat("Not Categorized");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <>
      <section className="bg-[#404040] flex flex-col  items-center w-full gap-14">
        <div className="flex flex-col mt-10 ml-3 mr-2 gap-7">
          <p className="self-center text-xl md:text-2xl font-bold text-slate-200">
            Income
          </p>
          <input
            type="number"
            id="txtincome-input"
            className="bg-gray-100 border-2 border-gray-300 md:w-[400px] w-[200px] rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
            placeholder="Add Income"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            required
          />

          <select
            id="selectValue-income"
            name="selectValue"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="border-2 border-gray-300 rounded-md md:w-[400px] text-black w-[200px] p-2.5 focus:border-2 focus:border-black text-center"
          >
            <option>Not Categorized</option>
            <option>Salary</option>
            <option>Bonus</option>
            <option>Commission</option>
          </select>

          <input
            type="date"
            id="income-date-input"
            value={date}
            className="bg-gray-100 border-2 border-gray-300 md:w-[400px] rounded-md w-[200px] text-black p-2.5 focus:border-2 focus:border-black text-center"
            placeholder=""
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="text"
            id="income-note-input"
            className="bg-gray-100 border-2 border-gray-300 md:w-[400px] rounded-md w-[200px] text-black p-2.5 focus:border-2 focus:border-black text-center"
            placeholder="Add Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
          />

          <button
            id="save-income"
            onClick={handleSaveIncome}
            className="border p-2 rounded-md w-[120px] self-center text-black mt-6 bg-[#51d289] hover:bg-[#1f9e56] hover:text-slate-100"
          >
            Save
          </button>
        </div>
        <div className="p-2 bg-[#2b2b2b] rounded-md mb-10 md:w-[400px] lg:w-[700px]">
          <table
            id="dataTableIncome"
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
            <tbody>
              {tableData.map((user, index) => {
                if (user.type == "Income") {
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
                }
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Income;
