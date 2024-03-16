import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  let users = []; //geting data from local storage
  let userdata = localStorage.getItem("users");
  let activeuser = localStorage.getItem("activeUser");
  let activeUserData;
  const navigate = useNavigate();
  const [category, setCategory] = useState("Income");
  const [expenseCat, setExpenseCat] = useState(false);
  const [incomeCat, setIncomeCat] = useState(true);
  const [subCat, setSubCat] = useState("");

  useEffect(() => {
    if (category == "Income") {
      setExpenseCat(false);
      setIncomeCat(true);
      setSubCat("");
    } else {
      setIncomeCat(false);
      setSubCat("");
      setExpenseCat(true);
    }
  }, [category, setCategory]);

  if (userdata) {
    users = JSON.parse(userdata);
  }
  //storing active user data in veriables
  users.find((user) => {
    user.Email === activeuser;
    activeUserData = user;
  });

  const [tableData, setTableData] = useState(activeUserData.transData);

  //checking authentication if user is not active redirecting to signin page
  useEffect(() => {
    if (!activeuser) {
      navigate("login");
    }
  }, [activeuser, navigate]);

  useEffect(() => {});

  return (
    <>
      <section className=" bg-[#404040] flex flex-col items-center w-full">
        <div className="flex flex-col gap-8 items-center">
          <div className="mt-20 flex flex-col gap-6">
            <select
              id="options"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="selectValue"
              className="bg-gray-100 border-2 border-gray-300 md:w-[400px] w-[200px] rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
            >
              <option>Income</option>
              <option>Expense</option>
            </select>
            {incomeCat ? (
              <div id="divOption1">
                <select
                  id="selectValue-income"
                  name="selectValue"
                  value={subCat}
                  onChange={(e) => setSubCat(e.target.value)}
                  className="border-2 border-gray-300 rounded-md md:w-[400px] text-black w-[200px] p-2.5 focus:border-2 focus:border-black text-center"
                >
                  <option></option>
                  <option>Not Categorized</option>
                  <option>Salary</option>
                  <option>Bonus</option>
                  <option>Commission</option>
                </select>
              </div>
            ) : null}
            {expenseCat ? (
              <div id="divOption2">
                <select
                  id="selectValue-expense"
                  name="selectValue"
                  value={subCat}
                  onChange={(e) => setSubCat(e.target.value)}
                  className="bg-gray-100 border-2 border-gray-300 md:w-[400px] w-[200px] rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
                >
                  <option></option>
                  <option>Not Categorized</option>
                  <option>Shopping</option>
                  <option>Utility</option>
                  <option>Food</option>
                </select>
              </div>
            ) : null}
          </div>
          <div className="p-2 bg-[#2b2b2b] rounded-md mb-10 md:w-[400px] lg:w-[700px]">
            <table
              id="dataTableIncome"
              className="table-auto border-collapse border"
            >
              <thead className="bg-white text-black">
                <tr>
                  <th className="border p-1 text-center">Type</th>
                  <th className="border p-1">Amount</th>
                  <th className="border p-1">Category</th>
                  <th className="border p-1">Date</th>
                  <th className="border p-1">Note</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((user, index) => {
                  if (user.type == category) {
                    if (user.cat == subCat) {
                      return (
                        <tr key={index}>
                          <td>{user.type}</td>
                          <td>{user.money}</td>
                          <td>{user.cat}</td>
                          <td>{user.date}</td>
                          <td>{user.note}</td>
                        </tr>
                      );
                    }
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
