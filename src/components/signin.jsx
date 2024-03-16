import { Link } from "react-router-dom";
import img2 from "./assets/singup.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Singin() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [confPass, setConfpass] = useState("");
  const navigate = useNavigate();

  let users = [];

  let localstorage = localStorage.getItem("users");

  if (localstorage) {
    users = JSON.parse(localstorage);
  }
  function useremail(Email) {
    return users.some((user) => user.Email === Email);
  }

  const handleRegister = () => {
    let Income = ["Not Categorized", "Salary", "Bonus", "Commission"];
    let Expense = ["Not Categorized", "Shopping", "Utility", "Food"];
    let transData = [];
    if (Name === "" || Email === "" || Pass === "" || confPass === "") {
      alert("Please fill all fields");
    } else if (!Email.includes(".com") || !Email.includes("@")) {
      alert("Invalid Email");
    } else if (Pass.length < 4) {
      alert("Week password");
    } else if (Pass !== confPass) {
      alert("Password does not match");
    } else if (useremail(Email)) {
      alert("Email already exists");
    } else {
      const newUser = {
        Name,
        Email,
        Pass,
        Income,
        Expense,
        transData,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/login");
    }
  };

  return (
    <>
      <div className="bg-[#404040] w-full h-lvh flex justify-center items-center font-Source Sans Pro, sans-serif">
        <div className="h-[550px] md:h-[650px] md:w-[700px] lg:w-[1000px] grid grid-cols-2 rounded-xl shadow-xl">
          <div className="bg-[#fffde7] md:col-span-1 md:flex flex-col rounded-l-xl shadow-xl hidden">
            <div className="h-[250px] flex flex-col justify-center">
              <p className="mt-28 ml-12 text-2xl italic">Calculate Smarter,</p>
              <p className="ml-12 text-2xl italic">Spend Wiser...</p>
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-8 col-span-2 md:col-span-1 justify-center bg-[#2b2b2b] rounded-xl md:rounded-r-xl md:rounded-none shadow-xl">
            <p className="text-slate-100 text-2xl text-center mb-2 md:mb-10 font-bold">
              EXPENSE <span className="text-[#51d289] ml-1">BOOK</span>
            </p>
            <input
              type="text"
              id="name-signup-input"
              className="bg-[#2b2b2b] mr-14 ml-14 border-b-2 border-gray-300 text-slate-100 p-2.5 focus:border-b-2 focus:outline-none text-center"
              placeholder="Your Name"
              autocomplete="off"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              id="email-signup-input"
              className="bg-[#2b2b2b] mr-14 ml-14 border-b-2 border-gray-300 text-slate-100 p-2.5 focus:border-b-2 focus:outline-none text-center"
              placeholder="you@example.com"
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="pass-signup-input"
              className="bg-[#2b2b2b] mr-14 ml-14 border-b-2 border-gray-300 text-slate-100 p-2.5 focus:border-b-2 focus:outline-none text-center"
              placeholder="Password"
              autocomplete="off"
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <input
              type="password"
              id="con-pass-signup-input"
              className="bg-[#2b2b2b] mr-14 ml-14 border-b-2 border-gray-300 text-slate-100 p-2.5 focus:border-b-2 focus:outline-none text-center"
              placeholder="Conform Password"
              autocomplete="off"
              onChange={(e) => setConfpass(e.target.value)}
              required
            />

            <button
              id="signup-btn"
              onClick={handleRegister}
              className="text-[#2b2b2b] bg-[#ffe600] w-[220px] p-1.5 mt-6 items-center self-center rounded-md"
            >
              Register
            </button>
            <Link
              to={"login"}
              className="self-center text-slate-100"
              href="login.html"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singin;
